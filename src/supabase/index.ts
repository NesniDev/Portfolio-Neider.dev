
import { createClient } from '@supabase/supabase-js'

// Verificar que las variables de entorno estén definidas
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   console.error('Error: Las variables de entorno de Supabase no están configuradas correctamente');
//   console.log('PUBLIC_SUPABASE_URL:', !!supabaseUrl ? 'Definida' : 'No definida');
//   console.log('PUBLIC_SUPABASE_ANON_KEY:', !!supabaseKey ? 'Definida' : 'No definida');
//   throw new Error('Error de configuración: Las variables de entorno de Supabase son requeridas');
// }

export const supabase = createClient(supabaseUrl, supabaseKey);