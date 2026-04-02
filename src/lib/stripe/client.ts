import { loadStripe } from '@stripe/stripe-js'

export const getStripe = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!publishableKey) throw new Error('Stripe publishable key not found')
  return loadStripe(publishableKey)
}