import { emailFactory, footer, header, templateService } from 'lyrax/lib/email/config'
import { supabase } from 'lyrax/lib/supabase/client'
import { NextRequest, NextResponse } from 'next/server'
import { ThemeType } from 'tzmail'
import {  z } from 'zod'


const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem muito curta'),
  subject: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, subject } = contactSchema.parse(body)

    if((await supabase.from('profile').select('id').eq('email', email)).data?.length === 0) 
      return NextResponse.json({success: false, error: 'Usuário não encontrado'}, {status: 404})

    // email para suporte
    await emailFactory.sendEmail({
      subject: subject || 'Nova mensagem de contato',
      to: process.env.CONTACT_EMAIL!,
      template: templateService.createTemplate(
        ThemeType.MINIMAL,
        "dark",
        {
          header,
          body: {
            title: `Nova mensagem de contato de ${name} (${email})`,
            message
          },
          footer,
          layout: 'full',
          spacing: 'normal',
          borderRadius: 'small'
        }
      )
    })

    // confirmação para o usuário
    await emailFactory.sendEmail({
      subject: 'Mensagem enviada com sucesso',
      to: email,
      template: templateService.createTemplate(
        ThemeType.MONOKAI,
        "dark",
        {
          header,
          body: {
            title: 'Obrigado por entrar em contato conosco!',
            message: `Olá ${name},<br><br>Recebemos sua mensagem e nossa equipe de suporte entrará em contato com você em breve. Agradecemos por nos informar sobre suas dúvidas ou problemas.<br><br>Atenciosamente,<br>Equipe LyraX`
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
    console.error('Erro no contato:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    )
  }
}