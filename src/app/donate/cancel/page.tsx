
'use client'

import { useRouter } from 'next/navigation'
import { XCircle, ArrowLeft, Heart } from 'lucide-react'
import { Header } from 'lyrax/components/layout/header'
import { Button } from 'lyrax/components/ui/button'
import { Footer } from 'lyrax/components/layout/footer'

export default function DonateCancelPage() {
  const router = useRouter()

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="h-10 w-10 text-yellow-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Doação não concluída
            </h1>
            <p className="text-gray-600 mb-6">
              Não se preocupe! Você pode tentar novamente quando quiser.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <Heart className="h-6 w-6 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                O LyraX continua sendo gratuito. Sua contribuição é sempre bem-vinda!
              </p>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                onClick={() => router.push('/donate')}
              >
                Tentar novamente
                <Heart className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200"
                onClick={() => router.push('/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o início
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}