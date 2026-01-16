import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@hvac/shared';

export const createClient = () => createClientComponentClient<Database>();
