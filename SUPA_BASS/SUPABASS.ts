
import { createClient } from '@supabase/supabase-js';
import {Database} from './supabase'

const supabaseUrl = 'https://fdmqrpxjtjlbxyymkshz.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient<Database>(supabaseUrl, String(supabaseKey))



export default supabase;