
-- Create a profiles table for user data
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a cars table for car listings
CREATE TABLE public.cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price INTEGER NOT NULL,
  mileage TEXT,
  color TEXT,
  fuel TEXT,
  transmission TEXT,
  seats INTEGER DEFAULT 5,
  telephone TEXT,
  description TEXT,
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create policies for cars
CREATE POLICY "Anyone can view cars" ON public.cars
  FOR SELECT TO authenticated, anon USING (true);

CREATE POLICY "Users can create their own cars" ON public.cars
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cars" ON public.cars
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cars" ON public.cars
  FOR DELETE USING (auth.uid() = user_id);

-- Create a function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
