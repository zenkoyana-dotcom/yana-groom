
const SUPABASE_URL = "https://mvudpgtdocgnzntqwwxv.supabase.co";

const SUPABASE_KEY = "ВСТАВЬ_СЮДА_СВОЙ_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase подключен");