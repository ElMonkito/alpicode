import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTQ0ODAwMCwiZXhwIjoxOTU3MDI0MDAwfQ.example';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  category: 'e-commerce' | 'vitrine' | 'refonte' | 'landing' | 'tous';
  image_url: string;
  project_url?: string;
  featured: boolean;
  order_index: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_role: string;
  content: string;
  rating: number;
  avatar_url?: string;
  is_active: boolean;
  created_at: string;
};

export type Partner = {
  id: string;
  name: string;
  logo_url: string;
  website_url?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};
