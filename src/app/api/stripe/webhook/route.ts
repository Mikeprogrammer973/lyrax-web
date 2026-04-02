import { NextRequest, NextResponse } from 'next/server'
import { stripe } from 'lyrax/lib/stripe/server'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  try {
    // check webhook
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    // prcess evento
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object

        console.log('Sessão de checkout concluída:', session)

        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object
        const subscription = await stripe.subscriptions.retrieve(invoice.id)
        console.log('Pagamento de fatura bem-sucedido para assinatura:', subscription.id)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        console.log('Assinatura cancelada:', subscription.id)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Erro no webhook:', error)
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    )
  }
}