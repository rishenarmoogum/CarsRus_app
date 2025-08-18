
-- Create a table for contact messages
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - allow anyone to insert messages but only admins to view
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to INSERT messages (for contact form submissions)
CREATE POLICY "Anyone can send messages" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that prevents SELECT (only admins should view messages)
-- This can be updated later to allow specific admin users to view
CREATE POLICY "No public access to view messages" 
  ON public.messages 
  FOR SELECT 
  USING (false);
