import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hilvtiyekzrqmjajtxzd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbHZ0aXlla3pycW1qYWp0eHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MzE1MDMsImV4cCI6MjA0NTMwNzUwM30.yePFGHkk9OmDOkZS2EHqiss2UE0lIzcds5rmukvlMbk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
