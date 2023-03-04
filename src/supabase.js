import { createClient } from '@supabase/supabase-js'

const DATABASE_URL = import.meta.env.VITE_DATABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(DATABASE_URL, SUPABASE_KEY)

export default supabase
