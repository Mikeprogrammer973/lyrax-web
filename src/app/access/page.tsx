/* eslint-disable @next/next/no-img-element */

'use client'

import { useEffect, useState } from 'react'
import { Download, Smartphone, QrCode, ArrowRight, Loader2 } from 'lucide-react'
import QRCode from 'qrcode'
import { Header } from 'lyrax/components/layout/header'
import { Button } from 'lyrax/components/ui/button'
import { Footer } from 'lyrax/components/layout/footer'
import { useSearchParams } from 'next/navigation'

export default function AccessPage() {
  const [countdown, setCountdown] = useState(30)
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [appUrl] = useState('https://play.google.com/store/apps/details?id=com.lyrax.app')
  const [deepLink] = useState('lyrax://auth/callback')

  /*const params = useSearchParams()

  useEffect(() => {
    const post = params.get('post')
    if (post) {
      window.location.href = `lyrax://post/${post}`
    }
  }, [params])*/

  useEffect(() => {
    QRCode.toDataURL(appUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: '#4F46E5',
        light: '#FFFFFF'
      }
    }, (err, url) => {
      if (!err) setQrCodeUrl(url)
    })

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = deepLink
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [appUrl, deepLink])

  const handleDownload = () => {
    window.open(appUrl, '_blank')
  }

  const handleRedirectNow = () => {
    window.location.href = deepLink
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen bg-linear-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-4">
                <Smartphone className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Acesso ao App</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Acesse o LyraX no seu celular
              </h1>
              <p className="text-lg text-gray-600">
                Escaneie o QR Code ou clique no botão para baixar o app
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <QrCode className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Escaneie o QR Code
                </h2>
                <div className="flex justify-center mb-6">
                  {qrCodeUrl ? (
                    <img 
                      src={qrCodeUrl} 
                      alt="QR Code para baixar o app" 
                      className="w-48 h-48 border-4 border-purple-100 rounded-xl"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Abra a câmera do seu celular e aponte para o QR Code
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Baixe o aplicativo
                </h2>
                <p className="text-gray-600 mb-6">
                  Disponível para Android na Google Play Store
                </p>
                <Button 
                  className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar agora
                </Button>
                <p className="text-xs text-gray-400">
                  Versão 1.0.0 • Tamanho aproximado: 102 MB
                </p>
              </div>
            </div>

            <div className="mt-12 bg-linear-to-r from-purple-50 to-purple-100/50 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Redirecionamento automático
              </h3>
              <p className="text-gray-600 mb-4">
                Você será redirecionado para o aplicativo em
              </p>
              
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 42}
                      strokeDashoffset={2 * Math.PI * 42 * (1 - countdown / 30)}
                      className="text-purple-600 transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-purple-600">
                      {countdown}
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">segundos restantes</p>
                  <p className="text-xs text-gray-400 mt-1">
                    para abrir automaticamente
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={handleRedirectNow}
                className="mt-2 border border-blue-500 text-blue-500"
              >
                Abrir agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-gray-400 mt-4">
                Se o aplicativo não abrir automaticamente, clique no botão acima
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Já tem o aplicativo instalado?{' '}
                <a href={deepLink} className="text-purple-600 hover:underline">
                  Abrir agora
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}