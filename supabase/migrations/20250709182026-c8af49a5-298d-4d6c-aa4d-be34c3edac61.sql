
-- Create storage bucket for car images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('car-images', 'car-images', true);

-- Create policy for public access to car images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'car-images');

-- Create policy for authenticated users to upload car images
CREATE POLICY "Users can upload car images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'car-images' AND auth.role() = 'authenticated');

-- Create policy for users to update their own car images
CREATE POLICY "Users can update own car images" ON storage.objects FOR UPDATE USING (bucket_id = 'car-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create policy for users to delete their own car images
CREATE POLICY "Users can delete own car images" ON storage.objects FOR DELETE USING (bucket_id = 'car-images' AND auth.uid()::text = (storage.foldername(name))[1]);
