
import { Check, Sparkles, Heart, Infinity, Star } from 'lucide-react'
import { Footer } from 'lyrax/components/layout/footer';
import { Header } from 'lyrax/components/layout/header';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-600">Para sempre grátis</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Simples, generoso e
              <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {' '}100% gratuito
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acreditamos que a criatividade não deve ter barreiras. Por isso, todas as funcionalidades 
              do Lyrax são completamente gratuitas. Sem pegadinhas, sem planos pagos.
            </p>
          </div>

          {/* Card Principal */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-linear-to-r from-primary-600 to-primary-500 p-6 text-center">
                <Sparkles className="h-12 w-12 text-white mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-white">Lyrax Gratuito</h2>
                <p className="text-white/90 text-sm">Para sempre</p>
              </div>
              <div className="p-8 text-center">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">R$ 0</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  Sem compromisso. Sem cartão de crédito. Sem anúncios.
                </p>
                <a
                  href="https://app.lyrax.com/signup"
                  className="block w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Começar a escrever
                </a>
              </div>
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <ul className="space-y-3">
                  <FeatureItem text="Publicações ilimitadas" />
                  <FeatureItem text="Comunidade ativa" />
                  <FeatureItem text="Editor com formatação rica" />
                  <FeatureItem text="Estatísticas de engajamento" />
                  <FeatureItem text="Notificações em tempo real" />
                  <FeatureItem text="Perfil personalizável" />
                  <FeatureItem text="Sem limites de texto" />
                  <FeatureItem text="Suporte prioritário" />
                </ul>
              </div>
            </div>
          </div>

          {/* Por que gratuito? */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-linear-to-r from-primary-50 to-primary-100/50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Heart className="h-10 w-10 text-primary-600 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-gray-900">Por que o Lyrax é gratuito?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">📖 Democratização da literatura</h3>
                  <p className="text-gray-600 text-sm">
                    Acreditamos que todos deveriam ter acesso a um espaço para expressar sua criatividade, 
                    independentemente de sua condição financeira.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">🌟 Valorizamos a comunidade</h3>
                  <p className="text-gray-600 text-sm">
                    Nossa maior recompensa é ver escritores crescendo e leitores descobrindo novos talentos. 
                    O sucesso da comunidade é o que nos move.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">✍️ Foco na criação</h3>
                  <p className="text-gray-600 text-sm">
                    Queremos que você se concentre no que importa: escrever. Sem se preocupar com limites 
                    ou pagamentos.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">🤝 Sustentabilidade comunitária</h3>
                  <p className="text-gray-600 text-sm">
                    Mantemos a plataforma através de doações voluntárias e parcerias que não interferem 
                    na experiência do usuário.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3 fill-yellow-400" />
              <p className="text-gray-600 italic mb-4">
                &quot;É incrível encontrar uma plataforma tão completa e gratuita. O Lyrax me deu a liberdade 
                de publicar sem me preocupar com custos.&quot;
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">A</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm">Ana Clara</p>
                  <p className="text-gray-500 text-xs">Escritora</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Preços */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Perguntas frequentes sobre preços
            </h2>
            <div className="space-y-4">
              <FaqItem 
                question="O Lyrax realmente será sempre gratuito?"
                answer="Sim! Nosso compromisso é manter a plataforma gratuita para todos os usuários. Acreditamos que a criatividade não deve ter barreiras financeiras."
              />
              <FaqItem 
                question="Como vocês se mantêm sem cobrar?"
                answer="Atualmente, mantemos a plataforma com recursos próprios e doações voluntárias de usuários que desejam apoiar o projeto. No futuro, podemos oferecer recursos opcionais de suporte, mas o core do Lyrax continuará gratuito."
              />
              <FaqItem 
                question="Existe limite de publicações?"
                answer="Não! Você pode publicar quantos textos quiser. Não há limites."
              />
              <FaqItem 
                question="Preciso de cartão de crédito para criar conta?"
                answer="Não! A criação de conta é 100% gratuita e não exige nenhum dado financeiro."
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="bg-linear-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white">
              <Infinity className="h-10 w-10 mx-auto mb-3 opacity-90" />
              <h2 className="text-xl font-bold mb-2">Sem limites. Sem custos.</h2>
              <p className="text-white/90 mb-4">
                Comece a escrever hoje mesmo. Sua voz merece ser ouvida.
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

// Componentes auxiliares
function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-600">
      <Check className="h-4 w-4 text-primary-500 shrink-0" />
      <span>{text}</span>
    </li>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
    </div>
  )
}