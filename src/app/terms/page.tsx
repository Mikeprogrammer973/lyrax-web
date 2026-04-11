import { Shield, FileText, Users, Clock, Mail, BabyIcon, TriangleAlert } from 'lucide-react'
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Versão Atual</h3>
              <p className="text-sm text-gray-500">v1.0 • Março 2026</p>
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                    <a
                      key={num}
                      href={`#section-${num}`}
                      className="text-sm text-purple-700 hover:text-purple-900 hover:underline"
                    >
                      {num}. {['Aceitação', 'Cadastro', 'Conteúdo', 'Conduta', 'Propriedade', 
                        'Modificações', 'Rescisão', 'Responsabilidade', 'Legislação', 'Alterações', 'Segurança Infantil'][num-1]}
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

                  <Section id="section-11" number="11" title="Segurança Infantil e Proteção contra CSAE">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-4">
                      <p className="text-red-700 font-semibold mb-2 flex items-center gap-2">
                        <TriangleAlert className="h-4 w-4" />
                        Nosso Compromisso Absoluto
                      </p>
                      <p className="text-red-600 text-sm">
                        O LyraX tem compromisso ZERO TOLERÂNCIA com qualquer forma de abuso ou exploração sexual infantil.
                      </p>
                    </div>

                    <h3 className="font-semibold text-gray-800 mt-4 mb-2">Proibições Estritas</h3>
                    <p>É estritamente proibido em nossa plataforma:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Qualquer conteúdo que explore, abuse ou coloque crianças em risco</li>
                      <li>Material de abuso sexual infantil (CSAM - Child Sexual Abuse Material)</li>
                      <li>Grooming, sextorsão ou qualquer forma de aliciamento de menores</li>
                      <li>Compartilhamento de informações pessoais de menores com intenção maliciosa</li>
                      <li>Qualquer interação sexualmente sugestiva envolvendo menores</li>
                      <li>Links ou referências a conteúdo explícito envolvendo menores</li>
                    </ul>

                    <h3 className="font-semibold text-gray-800 mt-4 mb-2">Medidas de Moderação</h3>
                    <p>Tomamos as seguintes ações imediatas:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>✅ Remoção imediata de qualquer conteúdo identificado como CSAE</li>
                      <li>✅ Suspensão permanente da conta de usuários que violem esta política</li>
                      <li>✅ Reporte às autoridades competentes (NCMEC e Polícia Federal)</li>
                      <li>✅ Preservação de evidências para investigação criminal</li>
                      <li>✅ Monitoramento ativo de padrões suspeitos</li>
                    </ul>

                    <h3 className="font-semibold text-gray-800 mt-4 mb-2">Canal de Denúncia</h3>
                    <p>Usuários podem reportar conteúdo suspeito através de:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>📱 <strong>No aplicativo:</strong> Botão &quot;Reportar&quot; disponível em cada publicação e comentário</li>
                      <li>📧 <strong>E-mail exclusivo:</strong> <a href="mailto:technopro.net@gmail.com" className="text-purple-600 hover:underline">csae@lyrax.com</a></li>
                      <li>🌐 <strong>Formulário Web:</strong> <a href="https://lyrax-web.vercel.app/support">lyrax-web.vercel.app/support</a></li>
                    </ul>

                    <h3 className="font-semibold text-gray-800 mt-4 mb-2">Contato para Assuntos de Segurança Infantil</h3>
                    <p>Para notificações sobre CSAE, entre em contato com nosso Encarregado Designado:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>E-mail:</strong> <a href="mailto:technopro.net@gmail.com" className="text-purple-600 hover:underline">csae@lyrax.com</a></li>
                      <li><strong>Tempo de resposta:</strong> 24 horas</li>
                      <li><strong>Disponibilidade:</strong> 24/7 para emergências</li>
                    </ul>

                    <h3 className="font-semibold text-gray-800 mt-4 mb-2">Conformidade Legal</h3>
                    <p>O LyraX está em conformidade com:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>📜 Lei 13.709/2018 (LGPD - Proteção de Dados)</li>
                      <li>📜 Lei 13.431/2017 (Proteção de crianças e adolescentes contra violência)</li>
                      <li>📜 Estatuto da Criança e do Adolescente (ECA)</li>
                      <li>📜 Diretrizes de Segurança Infantil do Google Play</li>
                      <li>📜 Convenção Internacional sobre os Direitos da Criança (ONU)</li>
                    </ul>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                      <p className="text-yellow-800 text-sm flex items-start gap-2">
                        <BabyIcon className="h-5 w-5 shrink-0 mt-0.5" />
                        <span>
                          <strong>⚠️ Emergência:</strong> Se você ou alguém que você conhece está em situação de risco iminente, 
                          entre em contato imediatamente com o <strong>Disque 100</strong> (Direitos Humanos) ou a 
                          <strong> Polícia Federal (194)</strong>.
                        </span>
                      </p>
                    </div>
                  </Section>

                  <div className="mt-12 p-6 bg-linear-to-r from-purple-50 to-purple-100/50 rounded-xl">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-purple-900 mb-2">Dúvidas?</h3>
                        <p className="text-purple-800 text-sm">
                          Em caso de dúvidas sobre estes Termos ou sobre nossas políticas de segurança infantil, entre em contato conosco através do email{' '}
                          <a href="mailto:technopro.net@gmail.com" className="underline font-medium hover:text-purple-900">
                            contato@lyrax.com
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