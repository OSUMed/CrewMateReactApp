import { createClient } from "@supabase/supabase-js";

const URL = "https://irwsqhjqmaqmnpgymppu.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyd3NxaGpxbWFxbW5wZ3ltcHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTQyMTIsImV4cCI6MTk5NjIzMDIxMn0.S5FTPkG8NpXjUbOpYrPXVNOnua-g7KpGHQVNSMYjAFo"

const supabase = createClient(URL, API_KEY);
export default supabase;
