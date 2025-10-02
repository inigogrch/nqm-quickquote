import { createClient } from "@supabase/supabase-js";
import { SUPABASE_CONFIG } from "../src/lib/config/credentials";

const supabaseUrl = SUPABASE_CONFIG.URL;
const supabaseAnonKey = SUPABASE_CONFIG.ANON_KEY;

export default createClient(
  supabaseUrl,
  supabaseAnonKey
);