import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wbzgatmpdxubhmfgofkv.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiemdhdG1wZHh1YmhtZmdvZmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NTExOTgsImV4cCI6MjA3MzAyNzE5OH0.-hn1afq5ks8k1RPwnVGiI2Po63XPDc2OUqnuKpHnNXQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
