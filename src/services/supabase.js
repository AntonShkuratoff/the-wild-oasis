import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pjxiprlwfpytqxmgfnmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqeGlwcmx3ZnB5dHF4bWdmbm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MDIyMDcsImV4cCI6MjAyODA3ODIwN30.ralunOjlblhDY8AAx7TI4tSeRlWjkCrpZKxhkbLHG78";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
