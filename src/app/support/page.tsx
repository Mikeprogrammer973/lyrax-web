/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useState } from 'react'
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  BookOpen, 
  Shield, 
  Edit, 
  Trash2, 
  Lock, 
  Bell,
  ChevronDown,
  ChevronUp,
  Send
} from 'lucide-react'
import { Header } from 'lyrax/components/layout/header'
import { Footer } from 'lyrax/components/layout/footer'
import { Button } from 'lyrax/components/ui/button'
import { Input } from 'lyrax/components/ui/input'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const faqs = [
    {
      question: 'Como começar a escrever na LyraX?',
      answer: 'Basta criar uma conta gratuita e acessar o editor. Você pode publicar poemas, histórias, crônicas ou qualquer outro formato literário. O editor oferece formatação rica e opções de estilo personalizadas.',
      icon: Edit,
    },
    {
      question: 'Como posso excluir minha conta?',
      answer: 'Você pode excluir sua conta permanentemente acessando Configurações > Privacidade & Segurança > Excluir conta. Todos os seus dados serão removidos em até 30 dias.',
      icon: Trash2,
    },
    {
      question: 'Como funciona o sistema de notificações?',
      answer: 'Você recebe notificações quando alguém curte, comenta ou segue seu perfil. Você pode gerenciar suas preferências de notificação nas configurações do app.',
      icon: Bell,
    },
    {
      question: 'Posso editar meus textos depois de publicados?',
      answer: 'Sim! Você pode editar seus textos a qualquer momento. As alterações são salvas automaticamente e os leitores veem a versão atualizada.',
      icon: Edit,
    },
    {
      question: 'Como funciona a privacidade dos meus textos?',
      answer: 'Você controla quem pode ver seus textos. Pode manter seu perfil público ou privado. Textos públicos são visíveis para todos, enquanto textos privados só são vistos por você.',
      icon: Shield,
    },
    {
      question: 'Esqueci minha senha, como recuperar?',
      answer: 'Na tela de login, clique em "Esqueci minha senha". Enviaremos um link para seu e-mail para criar uma nova senha segura.',
      icon: Lock,
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-6">
              <HelpCircle className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Central de Ajuda</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Como podemos ajudar?
            </h1>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas, encontre respostas ou entre em contato com nossa equipe de suporte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <HelpCard 
              icon={BookOpen}
              title="Guia do Usuário"
              description="Tudo que você precisa saber para começar a usar a LyraX"
              link="#"
            />
            <HelpCard 
              icon={Mail}
              title="Contato"
              description="Fale diretamente com nossa equipe de suporte"
              link="#contact"
            />
            <HelpCard 
              icon={MessageCircle}
              title="FAQ"
              description="Respostas para as perguntas mais frequentes"
              link="#faq"
            />
          </div>

          <div id="faq" className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Perguntas Frequentes</h2>
              <p className="text-gray-600">Encontre respostas para as dúvidas mais comuns</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                        <faq.icon className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-linear-to-r from-purple-50 to-purple-100/50 p-6 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Envie uma mensagem</h2>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Não encontrou o que procurava? Nossa equipe está pronta para ajudar.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gray-100">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <Input
                  label="Assunto"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Ex: Problemas com login, dúvida sobre publicação..."
                  required
                />

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Descreva sua dúvida ou problema em detalhes..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white bg-blue-600 hover:bg-blue-700" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar mensagem
                    </>
                  )}
                </Button>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm text-center">
                      ✅ Mensagem enviada com sucesso! Responderemos em breve.
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm text-center">
                      Erro ao enviar mensagem. Tente novamente ou entre em contato pelo email contato@lyraX.com
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-sm text-gray-500">
              Ou entre em contato diretamente pelo email{' '}
              <a href="mailto:contato@lyraX.com" className="text-purple-600 hover:underline">
                contato@lyraX.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Horário de atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function HelpCard({ icon: Icon, title, description, link }: { icon: any; title: string; description: string; link: string }) {
  return (
    <a
      href={link}
      className="bg-white rounded-xl p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all group text-center"
    >
      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </a>
  )
}