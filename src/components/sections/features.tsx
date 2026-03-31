
'use client'

import { motion } from 'framer-motion'
import { Pencil, Users, TrendingUp, Shield, Sparkles, BookOpen } from 'lucide-react'
import { Card } from '../ui/card'

const features = [
  {
    icon: Pencil,
    title: 'Escreva sem limites',
    description: 'Poemas, histórias, crônicas - publique qualquer tipo de texto com formatação rica e personalizada.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Users,
    title: 'Comunidade ativa',
    description: 'Conecte-se com outros escritores, receba feedbacks e descubra novos talentos.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: TrendingUp,
    title: 'Cresça como escritor',
    description: 'Acompanhe suas estatísticas, veja o engajamento e melhore sua escrita.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: BookOpen,
    title: 'Descubra leitores',
    description: 'Seus textos alcançam pessoas que realmente apreciam boa literatura.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Sparkles,
    title: 'Inspiração diária',
    description: 'Desafios de escrita, prompts criativos e temas para te inspirar todos os dias.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Shield,
    title: 'Segurança e privacidade',
    description: 'Seus dados são protegidos. Você controla quem pode ver seus textos.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Tudo que você precisa para
            <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              {' '}escrever e compartilhar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Uma plataforma completa para escritores que querem evoluir e encontrar seu público.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg hover:bg-violet-100 transition-shadow duration-300">
                <div className={`inline-flex rounded-xl ${feature.bgColor} p-3 mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}