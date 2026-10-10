-- ==============================================================================
-- CV. QEE BEE — Migration 003: Comprehensive Database & Storage Setup Verification
-- Phase 4C: Request Penawaran UI & Form Submission Fix
-- ==============================================================================
-- Jalankan skrip ini di SQL Editor pada Supabase Dashboard Anda.
-- Skrip ini bersifat idempoten (aman dijalankan berulang kali).
-- ==============================================================================

-- 1. Pastikan ekstensi pgcrypto tersedia untuk UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Pastikan tabel quote_requests tersedia
CREATE TABLE IF NOT EXISTS public.quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    
    -- Customer Identity
    customer_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    email TEXT,
    company_name TEXT,
    
    -- Product Specifications
    product_category TEXT NOT NULL,
    product_type TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    material TEXT,
    color TEXT,
    sizes TEXT,
    finishing TEXT,
    
    -- Order Details
    target_deadline DATE,
    design_file_path TEXT,
    design_file_name TEXT,
    notes TEXT,
    
    -- Operational Status
    status TEXT NOT NULL DEFAULT 'pending',
    
    -- Validasi data dasar
    CONSTRAINT customer_name_not_empty CHECK (char_length(trim(customer_name)) >= 2),
    CONSTRAINT whatsapp_number_not_empty CHECK (char_length(trim(whatsapp_number)) >= 8),
    CONSTRAINT quantity_positive CHECK (quantity > 0),
    CONSTRAINT status_valid CHECK (status IN ('pending', 'in_review', 'contacted', 'approved', 'rejected', 'completed'))
);

-- Index performa pencarian operasional
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON public.quote_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests (status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_whatsapp ON public.quote_requests (whatsapp_number);

-- 3. Trigger otomatis updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_quote_requests_updated_at ON public.quote_requests;
CREATE TRIGGER trigger_quote_requests_updated_at
    BEFORE UPDATE ON public.quote_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 4. Keamanan RLS untuk quote_requests
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert quote requests" ON public.quote_requests;
CREATE POLICY "Allow public insert quote requests"
    ON public.quote_requests
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        char_length(trim(customer_name)) >= 2 AND
        char_length(trim(whatsapp_number)) >= 8 AND
        quantity > 0
    );

-- 5. Tabel pembantu rate limit spam protection
CREATE TABLE IF NOT EXISTS public.rate_limit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lookup_key TEXT NOT NULL,
    action TEXT NOT NULL DEFAULT 'quote_request',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_rate_limit_log_lookup ON public.rate_limit_log (lookup_key, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rate_limit_log_created ON public.rate_limit_log (created_at DESC);

ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert rate_limit_log" ON public.rate_limit_log;
CREATE POLICY "Allow public insert rate_limit_log"
    ON public.rate_limit_log
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 6. Storage Bucket Privat 'quote-attachments'
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'quote-attachments',
    'quote-attachments',
    false, -- Bucket privat (tidak dapat di-list atau diakses publik langsung)
    10485760, -- 10MB
    ARRAY['image/jpeg', 'image/png', 'application/pdf']
)
ON CONFLICT (id) DO UPDATE SET
    public = false,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'application/pdf'];

-- 7. Kebijakan upload storage privat
DROP POLICY IF EXISTS "Allow public upload to quote-attachments" ON storage.objects;
CREATE POLICY "Allow public upload to quote-attachments"
    ON storage.objects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (bucket_id = 'quote-attachments');
