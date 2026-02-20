/*
  # AlpiCode Website Database Schema

  ## Overview
  Creates tables for AlpiCode agency website including projects, testimonials, partners, and contact messages.

  ## New Tables
  
  ### `projects`
  - `id` (uuid, primary key) - Unique project identifier
  - `title` (text) - Project title
  - `description` (text) - Project description
  - `category` (text) - Project category (e-commerce, vitrine, refonte, landing)
  - `image_url` (text) - Project image URL
  - `project_url` (text, nullable) - Live project URL
  - `featured` (boolean) - Whether project is featured
  - `created_at` (timestamptz) - Creation timestamp
  - `order_index` (integer) - Display order
  
  ### `testimonials`
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `client_name` (text) - Client name
  - `client_role` (text) - Client role/company
  - `content` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `avatar_url` (text, nullable) - Client avatar URL
  - `created_at` (timestamptz) - Creation timestamp
  - `is_active` (boolean) - Whether testimonial is displayed
  
  ### `partners`
  - `id` (uuid, primary key) - Unique partner identifier
  - `name` (text) - Partner name
  - `logo_url` (text) - Partner logo URL
  - `website_url` (text, nullable) - Partner website
  - `order_index` (integer) - Display order
  - `is_active` (boolean) - Whether partner is displayed
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `contact_messages`
  - `id` (uuid, primary key) - Unique message identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `phone` (text, nullable) - Sender phone
  - `message` (text) - Message content
  - `status` (text) - Message status (new, read, replied)
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for projects, testimonials, and partners (active only)
  - Authenticated insert for contact messages
  - Admin-only access for modifications

  ## Notes
  1. All tables use UUID primary keys for security
  2. Timestamps track creation dates
  3. Boolean flags control visibility
  4. Order indexes allow custom sorting
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('e-commerce', 'vitrine', 'refonte', 'landing', 'tous')),
  image_url text NOT NULL,
  project_url text,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  avatar_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Projects policies (public read)
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Testimonials policies (public read active only)
CREATE POLICY "Anyone can view active testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Partners policies (public read active only)
CREATE POLICY "Anyone can view active partners"
  ON partners FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Contact messages policies (anyone can insert)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample data for projects
INSERT INTO projects (title, description, category, image_url, project_url, featured, order_index) VALUES
('Swiss Watch Co.', 'Boutique e-commerce de luxe pour une marque horlogère suisse', 'e-commerce', 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg', 'https://example.com', true, 1),
('Alpine Resort', 'Site vitrine premium pour un hôtel 5 étoiles en montagne', 'vitrine', 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg', 'https://example.com', true, 2),
('TechStart Solutions', 'Refonte complète d''une plateforme SaaS B2B', 'refonte', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', 'https://example.com', true, 3),
('Crypto Summit 2024', 'Landing page événementielle haute conversion', 'landing', 'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg', 'https://example.com', false, 4),
('Geneva Banking', 'Plateforme bancaire privée suisse', 'vitrine', 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg', 'https://example.com', false, 5),
('Swiss Chocolate Shop', 'E-commerce artisanal pour chocolatier genevois', 'e-commerce', 'https://images.pexels.com/photos/3645114/pexels-photo-3645114.jpeg', 'https://example.com', false, 6);

-- Insert sample data for testimonials
INSERT INTO testimonials (client_name, client_role, content, rating, avatar_url) VALUES
('Sophie Mercier', 'CEO, Swiss Watch Co.', 'AlpiCode a transformé notre vision en réalité. Leur expertise technique et leur sens du design ont dépassé toutes nos attentes. Un partenaire de confiance.', 5, 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'),
('Marc Dubois', 'Directeur Marketing, Alpine Resort', 'Professionnalisme suisse à son meilleur. Délais respectés, communication parfaite, résultat exceptionnel. Notre taux de conversion a doublé.', 5, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'),
('Claire Fontaine', 'Fondatrice, TechStart Solutions', 'Une équipe qui comprend vraiment les enjeux business. Notre refonte a été un succès total grâce à leur approche stratégique et leur excellence technique.', 5, 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'),
('Jean-Pierre Laurent', 'CMO, Geneva Banking', 'La précision et la rigueur qu''on attend d''une agence suisse. AlpiCode livre des sites web dignes des plus grandes marques internationales.', 5, 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg');

-- Insert sample data for partners
INSERT INTO partners (name, logo_url, website_url, order_index) VALUES
('Swiss Quality', 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg', 'https://example.com', 1),
('Alpine Tech', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', 'https://example.com', 2),
('Geneva Innovation', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg', 'https://example.com', 3),
('Swiss Digital', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', 'https://example.com', 4),
('Mountain Ventures', 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg', 'https://example.com', 5),
('Helvetica Labs', 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg', 'https://example.com', 6);
