
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import supabaseAdmin from 'lyrax/lib/supabase/server'
import { emailFactory, footer, header, templateService } from 'lyrax/lib/email/config'
import { ThemeType } from 'tzmail'

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

    const { error: authError } = await supabase.auth.admin.deleteUser(userId)

    if (authError) {
      console.error('Erro ao deletar usuário do Auth:', authError)
      return NextResponse.json(
        { error: 'Erro ao deletar conta' },
        { status: 500 }
      )
    }

    // Enviar email de confirmação
    emailFactory.sendEmail({
      subject: 'Conta deletada com sucesso',
      to: user.email,
      template: templateService.createTemplate(
        ThemeType.MONOKAI,
        "dark",
        {
          header,
          body: {
            title: 'Sua conta foi deletada',
            message: `Olá ${user.name},<br><br>Sua conta foi deletada com sucesso.<br><br>Atenciosamente,<br>Equipe LyraX`
          },
          footer,
          layout: 'full',
          spacing: 'normal',
          borderRadius: 'small'
        }
      )
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro na exclusão:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
