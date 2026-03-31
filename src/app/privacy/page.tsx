/* eslint-disable @typescript-eslint/no-explicit-any */

import { Shield, Eye, Lock, Database, Mail, FileText, Users, Cookie, Clock } from 'lucide-react'
import { Footer } from 'lyrax/components/layout/footer';
import { Header } from 'lyrax/components/layout/header';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Privacidade e Proteção</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-gray-600">
              Seus dados são protegidos. Saiba como coletamos, usamos e protegemos suas informações.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <PrivacyCard icon={Eye} title="Transparência" description="Você sabe exatamente como seus dados são usados" />
            <PrivacyCard icon={Lock} title="Segurança" description="Protegemos seus dados com criptografia" />
            <PrivacyCard icon={Database} title="Controle" description="Você controla suas informações" />
            <PrivacyCard icon={Users} title="LGPD" description="Em conformidade com a lei brasileira" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-linear-to-r from-blue-50 to-blue-100/50 p-8 border-b border-blue-100">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-blue-600 shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">
                      Compromisso com sua privacidade
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                      Na LyraX, valorizamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. 
                      Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="prose prose-gray max-w-none">
                  <PrivacySection
                    icon={Database}
                    title="1. Informações que Coletamos"
                    items={[
                      { strong: "Dados de cadastro:", text: "Nome, e-mail, nome de usuário e senha criptografada" },
                      { strong: "Perfil:", text: "Foto de perfil, biografia e informações que você optar por compartilhar" },
                      { strong: "Conteúdo:", text: "Textos, poemas, histórias e comentários que você publicar" },
                      { strong: "Interações:", text: "Curtidas, seguidores, salvos e outras interações sociais" },
                      { strong: "Dados técnicos:", text: "Endereço IP, tipo de dispositivo, navegador e dados de uso" },
                    ]}
                  />

                  <PrivacySection
                    icon={Eye}
                    title="2. Como Usamos suas Informações"
                    items={[
                      "Fornecer, manter e melhorar nossos serviços",
                      "Personalizar sua experiência na plataforma",
                      "Enviar notificações sobre interações (curtidas, comentários, novos seguidores)",
                      "Garantir a segurança da plataforma e prevenir atividades fraudulentas",
                      "Cumprir obrigações legais e regulatórias",
                    ]}
                  />

                  <PrivacySection
                    icon={Users}
                    title="3. Compartilhamento de Dados"
                    note="Não vendemos nem alugamos seus dados pessoais. Podemos compartilhar informações apenas em situações específicas:"
                    items={[
                      "Com seu consentimento explícito",
                      "Para cumprir obrigações legais ou responder a autoridades competentes",
                      "Com provedores de serviços essenciais (hospedagem, notificações push, etc.)",
                      "Em caso de fusão, aquisição ou venda da empresa (com notificação prévia)",
                    ]}
                  />

                  <PrivacySection
                    icon={Shield}
                    title="4. Seus Direitos (LGPD)"
                    note="Em conformidade com a Lei Geral de Proteção de Dados, você tem direito a:"
                    items={[
                      "Confirmar a existência de tratamento de seus dados",
                      "Acessar seus dados pessoais",
                      "Corrigir dados incompletos, inexatos ou desatualizados",
                      "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários",
                      "Solicitar a portabilidade dos dados",
                      "Solicitar a exclusão dos seus dados",
                      "Revogar consentimento a qualquer momento",
                    ]}
                  />

                  <PrivacySection
                    icon={Clock}
                    title="5. Retenção de Dados"
                  >
                    <p>
                      Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário para 
                      cumprir obrigações legais. Após a exclusão da conta, seus dados serão removidos 
                      permanentemente em até 30 dias, exceto quando a retenção for exigida por lei.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    icon={Lock}
                    title="6. Segurança"
                  >
                    <p>
                      Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados 
                      contra acesso não autorizado, perda ou destruição. Utilizamos criptografia, firewalls e 
                      controles de acesso rigorosos.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mt-4">
                      <p className="text-green-800 text-sm mb-0">
                        <strong>🔒 Nossa garantia:</strong> Todos os dados são transmitidos com criptografia SSL/TLS.
                      </p>
                    </div>
                  </PrivacySection>

                  <PrivacySection
                    icon={Cookie}
                    title="7. Cookies e Tecnologias Similares"
                  >
                    <p>
                      Utilizamos cookies para melhorar sua experiência, lembrar preferências e analisar o uso 
                      da plataforma. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    icon={Users}
                    title="8. Dados de Crianças e Adolescentes"
                  >
                    <p>
                      A LyraX não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente 
                      dados de crianças. Se você é responsável e acredita que uma criança forneceu dados, 
                      entre em contato para que possamos removê-los.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    icon={FileText}
                    title="9. Alterações nesta Política"
                  >
                    <p>
                      Podemos atualizar esta Política periodicamente. Alterações significativas serão comunicadas 
                      através da plataforma ou por email. A versão atualizada será publicada nesta página com a 
                      data de revisão.
                    </p>
                  </PrivacySection>

                  <div className="mt-12 p-6 bg-linear-to-r from-purple-50 to-purple-100/50 rounded-xl">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-purple-900 mb-2">Contato</h3>
                        <p className="text-purple-800 text-sm">
                          Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato:
                        </p>
                        <div className="mt-3 space-y-1 text-sm text-purple-700">
                          <p><strong>Encarregado de Dados (DPO):</strong> <a href="mailto:privacy@lyraX.com" className="hover:underline">privacy@lyraX.com</a></p>
                          <p><strong>Email para contato:</strong> <a href="mailto:contato@lyraX.com" className="hover:underline">contato@lyraX.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">💡 Seus direitos garantidos pela LGPD</h4>
                        <p className="text-sm text-blue-800">
                          Você pode solicitar a exclusão da sua conta diretamente pelo app na seção 
                          &quot;Privacidade & Segurança&quot; ou através do nosso{' '}
                          <a href="/support" className="underline font-medium hover:text-blue-900">suporte</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function PrivacyCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  )
}

function PrivacySection({ 
  icon: Icon, 
  title, 
  items, 
  note, 
  children 
}: { 
  icon: any; 
  title: string; 
  items?: string[] | { strong: string; text: string }[]; 
  note?: string;
  children?: React.ReactNode 
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <Icon className="h-4 w-4 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="pl-11 text-gray-600">
        {note && <p className="text-gray-600 mb-3">{note}</p>}
        {items && Array.isArray(items) && (
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {items.map((item, idx) => {
              if (typeof item === 'string') {
                return <li key={idx}>{item}</li>
              }
              return (
                <li key={idx}>
                  <strong>{item.strong}</strong> {item.text}
                </li>
              )
            })}
          </ul>
        )}
        {children}
      </div>
    </div>
  )
}