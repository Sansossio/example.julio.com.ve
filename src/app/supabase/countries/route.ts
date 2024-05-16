import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../config'

export const runtime = 'edge'

export async function GET() {
  const supabase = createRouteHandlerClient<any>({ cookies }, {
    supabaseKey: SUPABASE_ANON_KEY,
    supabaseUrl: SUPABASE_URL
  })
  const { data } = await supabase.from('countries').select();
  return NextResponse.json(data)
}
