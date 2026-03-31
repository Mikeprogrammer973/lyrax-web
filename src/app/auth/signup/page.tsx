/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react'
import { supabase } from 'lyrax/lib/supabase/client'
import { Header } from 'lyrax/components/layout/header'
import { Footer } from 'lyrax/components/layout/footer'
import { Input } from 'lyrax/components/ui/input'
import { Button } from 'lyrax/components/ui/button'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [emailSent, setEmailSent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validações
    if (!formData.name.trim()) {
      setError('Por favor, digite seu nome completo')
      return
    }
    
    if (!formData.email.trim()) {
      setError('Por favor, digite seu e-mail')
      return
    }
    
    if (!formData.password) {
      setError('Por favor, digite uma senha')
      return
    }
    
    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem')
      return
    }

    setLoading(true)

    try {
      const {data: {user}, error} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: '/access',
        },
      })

      if (error) throw error

      await supabase.from('profiles').insert({
        id: user?.id,
        email: formData.email,
        name: formData.name,
        username: formData.name.toLowerCase().replace(/\s/g, '_') + '_' + Math.floor(Math.random() * 10000),
        avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.name.replace(/\s/g, '')}`,
      })

      setSuccess(true)
      setEmailSent(formData.email)
      
      setTimeout(() => {
        router.push('/access')
      }, 3000)
      
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-16 min-h-screen bg-linear-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Verifique seu e-mail
              </h1>
              <p className="text-gray-600 mb-4">
                Enviamos um link de confirmação para <strong>{emailSent}</strong>
              </p>
              <p className="text-sm text-gray-500">
                Clique no link enviado para ativar sua conta. Você será redirecionado automaticamente...
              </p>
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div className="bg-purple-600 h-1 rounded-full animate-pulse" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen bg-linear-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-4">
                <User className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Cadastro</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Crie sua conta
              </h1>
              <p className="text-gray-600">
                Comece sua jornada literária na LyraX
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Nome completo"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  icon={<User className="h-4 w-4 text-gray-400" />}
                  required
                />

                <Input
                  label="E-mail"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  icon={<Mail className="h-4 w-4 text-gray-400" />}
                  required
                />

                <Input
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  icon={<Lock className="h-4 w-4 text-gray-400" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  }
                  required
                />

                <Input
                  label="Confirmar senha"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  icon={<Lock className="h-4 w-4 text-gray-400" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  }
                  required
                />

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    'Criando conta...'
                  ) : (
                    <>
                      Criar conta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center">
                  Ao criar uma conta, você concorda com nossos{' '}
                  <a href="/terms" className="hover:underline">Termos de Uso</a>{' '}
                  e{' '}
                  <a href="/privacy" className="hover:underline">Política de Privacidade</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}