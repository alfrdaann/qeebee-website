-- ==============================================================================
-- CV. QEE BEE — Migration 001: Create Quote Requests Table & Storage Configuration
-- Phase 4A: Supabase Foundation
-- ==============================================================================

-- 1. Table: quote_requests
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
    
    -- Basic Validation Constraints
    CONSTRAINT customer_name_not_empty CHECK (char_length(trim(customer_name)) >= 2),
    CONSTRAINT whatsapp_number_not_empty CHECK (char_length(trim(whatsapp_number)) >= 8),
    CONSTRAINT quantity_positive CHECK (quantity > 0),
    CONSTRAINT status_valid CHECK (status IN ('pending', 'in_review', 'contacted', 'approved', 'rejected', 'completed'))
);

-- 2. Indexes for Query Performance & Operational Search
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON public.quote_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests (status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_whatsapp ON public.quote_requests (whatsapp_number);

-- 3. Automatic Updated-At Trigger Function
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

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- 5. Row Level Security Policies (Principle of Least Privilege)
-- Public / Anonymous users can ONLY insert submissions with valid basic fields.
-- Public users CANNOT SELECT, UPDATE, or DELETE any records.
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

-- 6. Supabase Storage Bucket Configuration (Private Bucket)
-- Bucket: 'quote-attachments'
-- Size Limit: 10MB (10485760 bytes)
-- Allowed MIME types: JPG, JPEG, PNG, PDF
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'quote-attachments',
    'quote-attachments',
    false, -- Private bucket: files cannot be viewed publicly
    10485760, -- Max 10MB
    ARRAY['image/jpeg', 'image/png', 'application/pdf']
)
ON CONFLICT (id) DO UPDATE SET
    public = false,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'application/pdf'];

-- 7. Storage Row Level Security Policies
-- Allow public/anonymous users to upload design attachments to the bucket.
-- Public users CANNOT view or list files in the bucket.
DROP POLICY IF EXISTS "Allow public upload to quote-attachments" ON storage.objects;
CREATE POLICY "Allow public upload to quote-attachments"
    ON storage.objects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (bucket_id = 'quote-attachments');
