
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import supabaseAdmin from 'lyrax/lib/supabase/server'

const deleteSchema = z.object({
  userId: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  reason: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const supabase = supabaseAdmin
    const body = await request.json()
    
    const { userId } = deleteSchema.parse(body)

    // Verificar se o usuário existe
    const { data: user, error: userError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Deletar usuário do Auth
    const { error: authError } = await supabase.auth.admin.deleteUser(userId)

    if (authError) {
      console.error('Erro ao deletar usuário do Auth:', authError)
      return NextResponse.json(
        { error: 'Erro ao deletar conta' },
        { status: 500 }
      )
    }

    // Enviar email de confirmação
    // tzmail

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro na exclusão:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}