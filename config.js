const db = supabase.createClient('https://cmgxzkezyuxwdysaillt.supabase.co','sb_publishable_DUvNlsLo0nl14lrNDoPwxg_DewFAF5d');
const $=id=>document.getElementById(id);
async function rpc(name,args={}){const {data,error}=await db.rpc(name,args);if(error)throw Error(error.message);return data;}
