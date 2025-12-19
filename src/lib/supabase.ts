import { createClient } from '@supabase/supabase-js'

// Your Supabase project credentials
const supabaseUrl =import.meta.env.VITE_SUPABASE_URL!; 
const supabaseAnonKey =import.meta.env.VITE_SUPABASE_ANON_KEY!; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  published_at: string
  image_url: string
  tags: string[]
  slug: string
  featured: boolean
  read_time: number
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor'
  created_at: string
  is_approved: boolean
}

// Admin whitelist - only these emails can access admin panel
export const ADMIN_WHITELIST = [
  'admin@flash.com'       // Main admin email

]
