-- Create contact_submissions table for storing form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS but allow anonymous inserts (public contact form)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form - no auth required)
CREATE POLICY "Allow public to submit contact forms"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view submissions
CREATE POLICY "Allow authenticated users to view submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
