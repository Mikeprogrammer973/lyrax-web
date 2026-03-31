'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-size-[40px_40px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-linear-to-r from-purple-200/30 to-purple-300/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
            <Sparkles size={16} />
            <span>Plataforma de escrita criativa</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Onde as palavras{' '}
            <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              ganham vida
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Uma comunidade para escritores e leitores que apreciam a arte da palavra escrita. 
            Publique, compartilhe e conecte-se com outros apaixonados por literatura.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className='bg-blue-600 hover:bg-blue-700 text-white group' size="lg">
              <Link href="https://app.lyrax.com" className="flex items-center gap-2">
                Começar a escrever
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button className='border border-gray-300 text-gray-700 hover:bg-gray-200' size="lg">
              <Link href="#features">Saiba mais</Link>
            </Button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Escritores +500</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Leitores +10k</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Publicações +2k</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}