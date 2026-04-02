

'use client'

import { useRouter } from 'next/navigation'
import { CheckCircle, Heart, ArrowRight } from 'lucide-react'
import { Header } from 'lyrax/components/layout/header'
import { Button } from 'lyrax/components/ui/button'
import { Footer } from 'lyrax/components/layout/footer'

export default function DonateSuccessPage() {
  const router = useRouter()
  /*const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [donation, setDonation] = useState<any>(null)*/


  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Doação realizada com sucesso!
            </h1>
            <p className="text-gray-600 mb-6">
              Muito obrigado pelo seu apoio!
            </p>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <Heart className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-purple-800">
                Sua doação ajuda a manter o LyraX gratuito e sem anúncios para todos.
              </p>
            </div>

            <Button
              className="w-full mb-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
              onClick={() => router.push('/')}
            >
              Voltar para o início
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <a
              href="/access"
              className="text-purple-600 hover:underline text-sm"
            >
              Ir para o aplicativo →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}