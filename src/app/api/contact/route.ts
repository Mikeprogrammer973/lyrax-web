import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'


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

    // Salvar no banco de dados (opcional)
    // await supabase.from('contacts').insert({ name, email, message })

    // Enviar email para suporte
    // tzmail

    // Enviar confirmação para o usuário
    // tzmail

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro no contato:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    )
  }
}