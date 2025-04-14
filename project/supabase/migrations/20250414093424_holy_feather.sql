/*
  # Initial HomeEase Schema Setup

  1. New Tables
    - `profiles` - User profiles for both customers and service providers
      - `id` (uuid, primary key) - References auth.users
      - `full_name` (text) - User's full name
      - `email` (text) - User's email
      - `phone` (text) - Phone number
      - `city` (text) - City of residence
      - `bio` (text) - About section for service providers
      - `photo_url` (text) - Profile photo URL
      - `is_provider` (boolean) - Whether user is a service provider
      - `created_at` (timestamp)
      
    - `services` - Available service categories
      - `id` (uuid, primary key)
      - `name` (text) - Service name
      - `description` (text)
      - `base_price` (numeric)
      - `category` (text)
      
    - `provider_services` - Services offered by providers
      - `id` (uuid, primary key)
      - `provider_id` (uuid) - References profiles
      - `service_id` (uuid) - References services
      - `price` (numeric)
      - `created_at` (timestamp)
      
    - `bookings` - Service bookings
      - `id` (uuid, primary key)
      - `customer_id` (uuid) - References profiles
      - `provider_id` (uuid) - References profiles
      - `service_id` (uuid) - References services
      - `status` (text)
      - `scheduled_for` (timestamp)
      - `address` (text)
      - `notes` (text)
      - `created_at` (timestamp)
      
    - `reviews` - Service reviews
      - `id` (uuid, primary key)
      - `booking_id` (uuid) - References bookings
      - `rating` (integer)
      - `comment` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for appropriate access control
*/

-- Create tables
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  full_name text,
  email text,
  phone text,
  city text,
  bio text,
  photo_url text,
  is_provider boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  base_price numeric NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE provider_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES profiles NOT NULL,
  service_id uuid REFERENCES services NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES profiles NOT NULL,
  provider_id uuid REFERENCES profiles NOT NULL,
  service_id uuid REFERENCES services NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  scheduled_for timestamptz NOT NULL,
  address text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Services are viewable by everyone" ON services
  FOR SELECT USING (true);

CREATE POLICY "Provider services are viewable by everyone" ON provider_services
  FOR SELECT USING (true);

CREATE POLICY "Providers can manage their services" ON provider_services
  FOR ALL USING (auth.uid() = provider_id);

CREATE POLICY "Customers can view own bookings" ON bookings
  FOR SELECT USING (auth.uid() = customer_id);

CREATE POLICY "Providers can view assigned bookings" ON bookings
  FOR SELECT USING (auth.uid() = provider_id);

CREATE POLICY "Customers can create bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid() = customer_id);

CREATE POLICY "Reviews are viewable by everyone" ON reviews
  FOR SELECT USING (true);

CREATE POLICY "Customers can create reviews for their bookings" ON reviews
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM bookings
      WHERE bookings.id = booking_id
      AND bookings.customer_id = auth.uid()
    )
  );