
import { Shield, FileText, Users, Clock, Mail } from 'lucide-react'
import { Footer } from 'lyrax/components/layout/footer';
import { Header } from 'lyrax/components/layout/header';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Documento Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-gray-600">
              Leia atentamente os termos e condições que regem o uso da plataforma LyraX.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Versão Atual</h3>
              <p className="text-sm text-gray-500">v2.0 • Março 2026</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">+10k Usuários</h3>
              <p className="text-sm text-gray-500">Confiam em nossos serviços</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Vigência</h3>
              <p className="text-sm text-gray-500">A partir do momento do cadastro</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              
              <div className="bg-linear-to-r from-purple-50 to-purple-100/50 p-6 border-b border-purple-100">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">Índice</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <a
                      key={num}
                      href={`#section-${num}`}
                      className="text-sm text-purple-700 hover:text-purple-900 hover:underline"
                    >
                      {num}. {['Aceitação', 'Cadastro', 'Conteúdo', 'Conduta', 'Propriedade', 
                        'Modificações', 'Rescisão', 'Responsabilidade', 'Legislação', 'Alterações'][num-1]}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="prose prose-gray max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                    <p className="text-blue-800 leading-relaxed mb-0">
                      Bem-vindo ao LyraX! Ao utilizar nossa plataforma, você concorda com estes Termos de Uso. 
                      Leia-os cuidadosamente antes de criar sua conta ou usar nossos serviços.
                    </p>
                  </div>

                  <Section id="section-1" number="1" title="Aceitação dos Termos">
                    <p>
                      Ao acessar ou usar o LyraX, você concorda em cumprir estes Termos de Uso. 
                      Se você não concordar com alguma parte destes termos, não poderá utilizar nossos serviços.
                    </p>
                  </Section>

                  <Section id="section-2" number="2" title="Cadastro e Conta">
                    <p>
                      Para utilizar certas funcionalidades do LyraX, você precisa criar uma conta. 
                      Você é responsável por manter a confidencialidade de suas credenciais e por todas as 
                      atividades realizadas em sua conta. Informações fornecidas devem ser verdadeiras, 
                      precisas e atualizadas.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-600 mb-0">
                        <strong>✅ Dica de segurança:</strong> Use uma senha forte e única para sua conta LyraX.
                      </p>
                    </div>
                  </Section>

                  <Section id="section-3" number="3" title="Conteúdo do Usuário">
                    <p>
                      Você mantém todos os direitos sobre os textos, poemas, histórias e demais conteúdos 
                      que publicar no LyraX. Ao publicar, você concede ao LyraX uma licença não exclusiva 
                      para hospedar, exibir e distribuir seu conteúdo dentro da plataforma.
                    </p>
                    <p className="mt-4">
                      Você é o único responsável pelo conteúdo que publica, garantindo que não infringe 
                      direitos de terceiros nem viola leis aplicáveis. Não são permitidos conteúdos que 
                      contenham discurso de ódio, violência explícita, assédio ou material ilegal.
                    </p>
                  </Section>

                  <Section id="section-4" number="4" title="Conduta do Usuário">
                    <p>Você concorda em usar o LyraX de forma ética e respeitosa. São proibidas práticas como:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Publicar conteúdo ofensivo, discriminatório ou ilegal</li>
                      <li>Assediar, intimidar ou perseguir outros usuários</li>
                      <li>Utilizar bots ou scripts automatizados</li>
                      <li>Violar direitos de propriedade intelectual de terceiros</li>
                      <li>Tentar acessar contas não autorizadas</li>
                    </ul>
                  </Section>

                  <Section id="section-5" number="5" title="Propriedade Intelectual">
                    <p>
                      O LyraX e seus elementos visuais, marca, logotipo e código são de nossa propriedade 
                      ou licenciados para nós. Você não pode copiar, modificar ou distribuir qualquer parte 
                      da plataforma sem autorização expressa.
                    </p>
                  </Section>

                  <Section id="section-6" number="6" title="Modificações e Interrupções">
                    <p>
                      Reservamos o direito de modificar, suspender ou descontinuar qualquer parte do serviço 
                      a qualquer momento, com ou sem aviso prévio. Não seremos responsáveis por eventuais 
                      indisponibilidades.
                    </p>
                  </Section>

                  <Section id="section-7" number="7" title="Rescisão">
                    <p>
                      Podemos encerrar ou suspender sua conta imediatamente, sem aviso prévio, se você violar 
                      estes Termos. Você pode encerrar sua conta a qualquer momento através das configurações 
                      do perfil ou solicitando suporte.
                    </p>
                  </Section>

                  <Section id="section-8" number="8" title="Limitação de Responsabilidade">
                    <p>
                      O LyraX é fornecido &quot;como está&quot;, sem garantias de qualquer tipo. Não nos responsabilizamos 
                      por danos indiretos, perda de dados ou lucros cessantes decorrentes do uso da plataforma.
                    </p>
                  </Section>

                  <Section id="section-9" number="9" title="Legislação Aplicável">
                    <p>
                      Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será submetida ao foro 
                      da comarca de São Paulo, SP.
                    </p>
                  </Section>

                  <Section id="section-10" number="10" title="Alterações nos Termos">
                    <p>
                      Podemos revisar estes Termos periodicamente. A versão atualizada será publicada nesta página 
                      com a data de revisão. O uso continuado após as alterações constitui aceitação dos novos termos.
                    </p>
                  </Section>

                  <div className="mt-12 p-6 bg-linear-to-r from-purple-50 to-purple-100/50 rounded-xl">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-purple-900 mb-2">Dúvidas?</h3>
                        <p className="text-purple-800 text-sm">
                          Em caso de dúvidas sobre estes Termos, entre em contato conosco através do email{' '}
                          <a href="mailto:technopro.net@gmail.com" className="underline font-medium hover:text-purple-900">
                            technopro.net@gmail.com
                          </a>
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

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-purple-700">{number}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="pl-11 text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  )
}