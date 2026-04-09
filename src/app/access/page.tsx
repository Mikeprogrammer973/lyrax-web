/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */

'use client'

import { useEffect, useState } from 'react'
import { Download, Smartphone, QrCode, ArrowRight, Loader2, Link as LinkIcon, AlertCircle } from 'lucide-react'
import QRCode from 'qrcode'
import { Header } from 'lyrax/components/layout/header'
import { Button } from 'lyrax/components/ui/button'
import { Footer } from 'lyrax/components/layout/footer'

export default function AccessPage() {
  const [countdown, setCountdown] = useState(3)
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [appUrl] = useState('https://play.google.com/store/apps/details?id=com.lyrax.app')
  const [deepLink, setDeepLink] = useState('lyrax://auth/callback')
  const [postId, setPostId] = useState<string | null>(null)
  const [autoRedirect, setAutoRedirect] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const post = params.get('post')
    
    if (post) {
      setPostId(post)
      setDeepLink(`lyrax://post/${post}`)
      setAutoRedirect(true)
    } else {
      setAutoRedirect(true)
    }

    const qrLink = post ? `https://lyrax.com/access?post=${post}` : appUrl
    
    QRCode.toDataURL(qrLink, {
      width: 200,
      margin: 2,
      color: {
        dark: '#4F46E5',
        light: '#FFFFFF'
      }
    }, (err, url) => {
      if (!err) setQrCodeUrl(url)
    })
  }, [appUrl])

  useEffect(() => {
    if (!autoRedirect) return

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
  }, [deepLink, autoRedirect])

  const handleRedirectNow = () => {
    window.location.href = deepLink
  }

  const handleCancelRedirect = () => {
    setAutoRedirect(false)
  }

  const handleResumeRedirect = () => {
    setAutoRedirect(true)
    setCountdown(3)
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen bg-linear-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {postId && (
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LinkIcon className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">
                      Link direto para o post
                    </p>
                    <p className="text-xs text-blue-600">
                      Você está sendo redirecionado para o post específico
                    </p>
                  </div>
                </div>
                <div className="text-xs text-blue-600 font-mono bg-blue-100 px-2 py-1 rounded">
                  ID: {postId}
                </div>
              </div>
            )}

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-4">
                <Smartphone className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">
                  {postId ? 'Abrir post no app' : 'Acesso ao App'}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {postId ? 'Abrir post no LyraX' : 'Acesse o LyraX no seu celular'}
              </h1>
              <p className="text-lg text-gray-600">
                {postId 
                  ? 'Escaneie o QR Code ou clique no botão para abrir o post diretamente no app'
                  : 'Escaneie o QR Code ou clique no botão para baixar o app'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
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
                      alt="QR Code" 
                      className="w-48 h-48 border-4 border-purple-100 rounded-xl"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  {postId 
                    ? 'Abra a câmera e aponte para o QR Code para abrir o post'
                    : 'Abra a câmera do seu celular e aponte para o QR Code'
                  }
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {postId ? 'Abrir post no app' : 'Baixe o aplicativo'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {postId 
                    ? 'Clique no botão abaixo para abrir o post diretamente no LyraX'
                    : 'Disponível para Android na Google Play Store'
                  }
                </p>
                <Button 
                  className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  onClick={handleRedirectNow}
                >
                  {postId ? (
                    <>
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Abrir post agora
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Baixar agora
                    </>
                  )}
                </Button>
                {!postId && (
                  <p className="text-xs text-gray-400">
                    Versão 1.0.0 • Tamanho aproximado: 95 MB
                  </p>
                )}
              </div>
            </div>

            <div className="mt-12 bg-linear-to-r from-purple-50 to-purple-100/50 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {autoRedirect ? 'Redirecionamento automático' : 'Redirecionamento pausado'}
              </h3>
              <p className="text-gray-600 mb-4">
                {autoRedirect 
                  ? `Você será redirecionado para o ${postId ? 'post' : 'aplicativo'} em`
                  : 'Clique no botão abaixo para continuar'
                }
              </p>
              
              {autoRedirect ? (
                <>
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
                          strokeDashoffset={2 * Math.PI * 42 * (1 - countdown / 3)}
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
                        para abrir {postId ? 'o post' : 'automaticamente'}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <Button
                      variant="outline"
                      onClick={handleRedirectNow}
                      className="border-blue-500 text-blue-500"
                    >
                      Abrir agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCancelRedirect}
                      className="border-gray-300 text-gray-600"
                    >
                      Cancelar
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-3 justify-center">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <p className="text-sm text-yellow-700">
                        O redirecionamento automático foi cancelado
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <Button
                      onClick={handleResumeRedirect}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Tentar novamente
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleRedirectNow}
                      className="border-blue-500 text-blue-500"
                    >
                      Abrir agora
                    </Button>
                  </div>
                </>
              )}

              <p className="text-xs text-gray-400 mt-4">
                Se {postId ? 'o post' : 'o aplicativo'} não abrir automaticamente, clique no botão acima
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                {postId ? 'Não tem o app instalado?' : 'Já tem o aplicativo instalado?'}{' '}
                <a href={deepLink} className="text-purple-600 hover:underline">
                  {postId ? 'Baixar o app' : 'Abrir agora'}
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