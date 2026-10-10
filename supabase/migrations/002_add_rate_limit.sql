-- ==============================================================================
-- CV. QEE BEE — Migration 002: Add Rate Limiting Helpers
-- Phase 4B: Request Quote Integration - Additional Security
-- ==============================================================================

-- This migration adds a helper table for lightweight spam protection.
-- Tracks recent submission attempts by IP / WA number without storing PII.

CREATE TABLE IF NOT EXISTS public.rate_limit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lookup_key TEXT NOT NULL,                           -- hashed WA number or session token
    action TEXT NOT NULL DEFAULT 'quote_request',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Auto-purge entries older than 24h via index for efficient cleanup queries
CREATE INDEX IF NOT EXISTS idx_rate_limit_log_lookup ON public.rate_limit_log (lookup_key, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rate_limit_log_created ON public.rate_limit_log (created_at DESC);

-- RLS: public can insert only (for counting submissions by key)
ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert rate_limit_log" ON public.rate_limit_log;
CREATE POLICY "Allow public insert rate_limit_log"
    ON public.rate_limit_log
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Public cannot read, update or delete rate limit entries
-- (No SELECT policy = no public reads by default with RLS enabled)


-- ==============================================================================
-- Additional RLS: Ensure the storage INSERT policy for quote-attachments
-- allows sub-folder path structure (e.g. "{uuid}/filename.pdf")
-- Re-apply with explicit condition if not already present.
-- ==============================================================================
DROP POLICY IF EXISTS "Allow public upload to quote-attachments" ON storage.objects;
CREATE POLICY "Allow public upload to quote-attachments"
    ON storage.objects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        bucket_id = 'quote-attachments'
    );
