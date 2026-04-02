import { NextRequest, NextResponse } from 'next/server'
import { stripe, getPriceId } from 'lyrax/lib/stripe/server'

export async function POST(request: NextRequest) {
  try {

    const { amount, isRecurring = false} = await request.json()

    if (!amount || amount < 5) {
      return NextResponse.json(
        { error: 'Valor mínimo de doação é R$ 5,00' },
        { status: 400 }
      )
    }

    // create sessão de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'eps', 'pix', 'klarna', 'link', 'affirm'],
      line_items: isRecurring ? [
        {
          price: getPriceId(),
          quantity: 1,
        }
      ] : [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Doação para o LyraX',
              description: `Doação de R$ ${amount.toFixed(2)} para apoiar a plataforma`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        }
      ],
      mode: isRecurring ? 'subscription' : 'payment',
      success_url: `${request.headers.get('origin')}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/donate/cancel`,
      metadata: {
        amount: amount.toString(),
        is_recurring: isRecurring.toString(),
      }
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Erro ao criar checkout:', error)
    return NextResponse.json(
      { error: 'Erro ao processar doação' },
      { status: 500 }
    )
  }
}