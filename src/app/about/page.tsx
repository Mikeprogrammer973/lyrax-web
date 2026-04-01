 
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Heart, PenTool, Users, Sparkles, Globe, Target, Rocket } from 'lucide-react'
import { Footer } from 'lyrax/components/layout/footer';
import { Header } from 'lyrax/components/layout/header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Nossa História</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Onde as palavras
              <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                {' '}ganham vida
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Uma comunidade apaixonada por literatura, criada para escritores e leitores que acreditam 
              no poder transformador das palavras.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-linear-to-r from-purple-50 to-purple-100/50 rounded-2xl p-8 text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Nossa Missão</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Democratizar o acesso à literatura, conectando escritores a leitores apaixonados 
                e proporcionando um espaço onde a criatividade floresce sem limites.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ValueCard 
                icon={PenTool}
                title="Liberdade Criativa"
                description="Acreditamos que cada voz merece ser ouvida. Damos total liberdade para você expressar sua arte."
              />
              <ValueCard 
                icon={Users}
                title="Comunidade"
                description="Construímos um espaço acolhedor onde escritores e leitores se conectam e crescem juntos."
              />
              <ValueCard 
                icon={Sparkles}
                title="Inspiração"
                description="Acreditamos que boas histórias inspiram boas histórias. Cultivamos um ambiente de troca e aprendizado."
              />
              <ValueCard 
                icon={Globe}
                title="Diversidade"
                description="Celebramos todas as vozes, estilos e perspectivas. A literatura é universal e deve ser para todos."
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatNumber number="10k+" label="Usuários" />
              <StatNumber number="2k+" label="Publicações" />
              <StatNumber number="500+" label="Escritores" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-r from-purple-600 to-purple-500 rounded-2xl p-8 text-center text-white">
              <Rocket className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-3">Faça parte da nossa história</h2>
              <p className="text-white/90 mb-6">
                Junte-se a milhares de escritores e leitores que já descobriram a LyraX.
              </p>
              <a
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Criar conta gratuita
                <Sparkles className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function ValueCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StatNumber({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-purple-600 mb-1">{number}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}
