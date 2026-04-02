import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
})

export const getPriceId = () => {
  return process.env.STRIPE_PRICE_ID
}