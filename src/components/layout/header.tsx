'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Recursos', href: '/features' },
    { name: 'Preços', href: '/pricing' },
    { name: 'Sobre', href: '/about' },
    { name: 'Doar', href: '/donate' }
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              LyraX
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className='bg-blue-600 hover:bg-blue-700 text-white' variant="outline" size="sm">
              <Link href="/access">Acessar App</Link>
            </Button>
            <Button className='bg-black hover:bg-gray-800 text-white' size="sm">
              <Link href="/auth/signup">Começar agora</Link>
            </Button>
          </div>

          {/* mobile menu btn */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white' variant="outline" size="sm">
                <Link href="/access">Acessar App</Link>
              </Button>
              <Button className='w-full bg-black hover:bg-gray-800 text-white' size="sm">
                <Link href="/auth/signup">Começar agora</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}