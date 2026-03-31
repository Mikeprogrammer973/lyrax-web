
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-primary-600 to-primary-500" />
      
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[40px_40px]" />
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm text-white font-medium">Comece agora mesmo</span>
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Pronto para dar vida às suas palavras?
          </h2>
          
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Junte-se a milhares de escritores e leitores que já transformaram sua paixão pela escrita em algo especial.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 group"
            >
              <Link href="/auth/signup" className="flex items-center gap-2">
                Começar a escrever
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/support">
                Fale conosco
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Não precisa de cartão de crédito. Comece grátis hoje mesmo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}