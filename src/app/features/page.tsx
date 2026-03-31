/* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  PenTool, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Sparkles, 
  Shield, 
  Bell, 
  Bookmark, 
  Heart, 
  MessageCircle, 
  Layout, 
  Share2,
  Eye,
  Check
} from 'lucide-react'
import { Footer } from 'lyrax/components/layout/footer';
import { Header } from 'lyrax/components/layout/header';

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-600">Recursos Poderosos</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Tudo que você precisa para
              <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {' '}escrever e compartilhar
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Uma plataforma completa para escritores, com ferramentas que potencializam sua criatividade 
              e conectam você a uma comunidade apaixonada por literatura.
            </p>
          </div>

          {/* Destaque Principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-linear-to-r from-primary-50 to-primary-100/50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 mb-4">
                    <PenTool className="h-3 w-3 text-primary-600" />
                    <span className="text-xs font-medium text-primary-600">Editor Premium</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Editor de texto avançado</h2>
                  <p className="text-gray-600">
                    Escreva com liberdade usando nosso editor completo, que oferece formatação rica, 
                    personalização de fonte e tamanho, e uma experiência de escrita fluida e intuitiva.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-600 italic text-sm mb-2">
                      &quot;As palavras dançam sob a lua, como pensamentos que nunca dormem.&quot;
                    </p>
                    <p className="text-xs text-gray-400">— Poema de exemplo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <FeatureCard 
              icon={PenTool}
              title="Editor Poderoso"
              description="Formatação rica, personalização de fonte e tamanho. Escreva da forma que preferir."
              color="primary"
            />
            <FeatureCard 
              icon={Layout}
              title="Design Personalizável"
              description="Escolha fontes, tamanhos e estilos para dar a cara do seu texto."
              color="blue"
            />
            <FeatureCard 
              icon={Bookmark}
              title="Posts Salvos"
              description="Salve seus textos favoritos para ler depois e crie sua própria biblioteca."
              color="purple"
            />
            <FeatureCard 
              icon={Heart}
              title="Curtidas e Interações"
              description="Receba feedbacks e mostre seu apoio aos escritores que você admira."
              color="red"
            />
            <FeatureCard 
              icon={MessageCircle}
              title="Comentários"
              description="Converse com outros leitores e escritores sobre os textos."
              color="green"
            />
            <FeatureCard 
              icon={Users}
              title="Comunidade Ativa"
              description="Conecte-se com outros apaixonados por literatura."
              color="orange"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Estatísticas"
              description="Acompanhe visualizações, curtidas e engajamento dos seus textos."
              color="teal"
            />
            <FeatureCard 
              icon={Bell}
              title="Notificações em Tempo Real"
              description="Saiba na hora quando alguém interage com seu conteúdo."
              color="yellow"
            />
            <FeatureCard 
              icon={Eye}
              title="Privacidade Controlada"
              description="Escolha quem pode ver seus textos: todos ou apenas seguidores."
              color="indigo"
            />
            <FeatureCard 
              icon={Share2}
              title="Compartilhamento"
              description="Compartilhe seus textos nas redes sociais e com amigos."
              color="pink"
            />
            <FeatureCard 
              icon={BookOpen}
              title="Descoberta de Conteúdo"
              description="Explore novos escritores e textos através da página de descoberta."
              color="cyan"
            />
            <FeatureCard 
              icon={Shield}
              title="Segurança"
              description="Seus dados estão protegidos com as melhores práticas de segurança."
              color="gray"
            />
          </div>

          {/* Comparativo */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Por que escolher o Lyrax?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  O que você ganha
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500" />
                    Publicações ilimitadas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500" />
                    Comunidade ativa e acolhedora
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500" />
                    Editor completo e personalizável
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500" />
                    Estatísticas detalhadas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500" />
                    100% gratuito
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-r from-primary-50 to-primary-100/50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary-500" />
                  Nossa diferença
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Sparkles className="h-4 w-4 text-primary-500" />
                    Foco genuíno na comunidade
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Sparkles className="h-4 w-4 text-primary-500" />
                    Sem anúncios invasivos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Sparkles className="h-4 w-4 text-primary-500" />
                    Curadoria de conteúdo humano
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Sparkles className="h-4 w-4 text-primary-500" />
                    Suporte rápido e atencioso
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-linear-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white">
              <PenTool className="h-10 w-10 mx-auto mb-3 opacity-90" />
              <h2 className="text-xl font-bold mb-2">Pronto para começar a escrever?</h2>
              <p className="text-white/90 mb-4">
                Junte-se a milhares de escritores e leitores que já fazem parte do Lyrax.
              </p>
              <a
                href="https://app.lyrax.com/signup"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

// Componente FeatureCard
function FeatureCard({ icon: Icon, title, description, color }: { 
  icon: any; 
  title: string; 
  description: string; 
  color: string 
}) {
  const colorClasses = {
    primary: "bg-primary-50 text-primary-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    teal: "bg-teal-50 text-teal-600",
    yellow: "bg-yellow-50 text-yellow-600",
    indigo: "bg-indigo-50 text-indigo-600",
    pink: "bg-pink-50 text-pink-600",
    cyan: "bg-cyan-50 text-cyan-600",
    gray: "bg-gray-50 text-gray-600",
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[color as keyof typeof colorClasses]}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}