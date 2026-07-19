
const SUPABASE_URL = "https://mvudpgtdocgnzntqwwxv.supabase.co";

const SUPABASE_KEY = "sb_publishable_dOFWK5EK0QcZzWt_l7Q6Zg_hUIKNZOe...";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase подключен");