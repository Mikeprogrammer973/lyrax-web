/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useState } from 'react'
import { Heart, Coffee, Star, Sparkles, Gift, CreditCard, QrCode, Wallet } from 'lucide-react'
import { Header } from 'lyrax/components/layout/header'
import { Button } from 'lyrax/components/ui/button'
import { Footer } from 'lyrax/components/layout/footer'
import { Input } from 'lyrax/components/ui/input'

const donationAmounts = [5, 10, 20, 50, 100]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isRecurring, setIsRecurring] = useState(false)
  const [loading, setLoading] = useState(false)

  const getAmount = () => {
    if (customAmount) return parseFloat(customAmount)
    if (selectedAmount) return selectedAmount
    return null
  }

  const handleDonate = async () => {
    const amount = getAmount()
    if (!amount || amount < 5) {
      alert('Valor mínimo de doação é R$ 5,00')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, isRecurring }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('Erro ao criar checkout')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao processar doação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Apoie o Lyrax</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Ajude a manter a
              <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                {' '}literatura viva
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              O LyraX é 100% gratuito e sem anúncios. Sua doação nos ajuda a manter a plataforma 
              e continuar oferecendo o melhor para escritores e leitores.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <ImpactCard 
              icon={Coffee}
              title="Café"
              description="Ajuda a manter o time acordado"
              amount="R$ 10"
            />
            <ImpactCard 
              icon={Star}
              title="Estrela"
              description="Dá um brilho especial"
              amount="R$ 25"
            />
            <ImpactCard 
              icon={Sparkles}
              title="Inspiração"
              description="Faz a mágica acontecer"
              amount="R$ 50"
            />
            <ImpactCard 
              icon={Gift}
              title="Presente"
              description="Um presente para todos"
              amount="R$ 100"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-linear-to-r from-purple-50 to-purple-100/50 p-6 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Faça sua doação</h2>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Escolha o valor que deseja contribuir para manter o LyraX vivo e gratuito.
                </p>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Escolha um valor
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount('')
                        }}
                        className={`py-3 rounded-lg font-medium transition-all ${
                          selectedAmount === amount && !customAmount
                            ? 'bg-purple-600 text-white shadow-md scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        R$ {amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ou digite um valor personalizado
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      min="5"
                      step="1"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(null)
                      }}
                      rightIcon={<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>}
                      placeholder="5"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border text-black border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Valor mínimo: R$ 5,00
                  </p>
                </div>

                {/*<div className="bg-gray-50 rounded-lg p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">Doação mensal</p>
                        <p className="text-sm text-gray-500">
                          Apoie o LyraX todos os meses
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </label>
                </div>*/}

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-500 text-center mb-3">
                    Pagamento seguro via Stripe
                  </p>
                  <div className="flex justify-center gap-4">
                    <CreditCard className="h-6 w-6 text-gray-400" />
                    <QrCode className="h-6 w-6 text-gray-400" />
                    <Wallet className="h-6 w-6 text-gray-400" />
                  </div>
                </div>

                <Button
                  className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleDonate}
                  disabled={loading}
                >
                  {loading ? (
                    'Processando...'
                  ) : (
                    <>
                      <Heart className="mr-2 h-5 w-5" />
                      Doar {getAmount() ? `R$ ${getAmount()}` : ''}
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Ao fazer uma doação, você concorda com nossos{' '}
                  <a href="/terms" className="hover:underline">Termos de Uso</a>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Seu apoio faz a diferença
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-purple-600">+10k</p>
                <p className="text-sm text-gray-500">usuários ativos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">+2k</p>
                <p className="text-sm text-gray-500">publicações</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-2xl font-bold text-purple-600">100%</p>
                <p className="text-sm text-gray-500">gratuito</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function ImpactCard({ icon: Icon, title, description, amount }: { 
  icon: any; 
  title: string; 
  description: string; 
  amount: string 
}) {
  return (
    <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
        <Icon className="h-5 w-5 text-purple-600" />
      </div>
      <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      <p className="text-xs text-gray-500 mb-1">{description}</p>
      <p className="text-purple-600 font-bold text-sm">{amount}</p>
    </div>
  )
}