import Link from 'next/link'

const footerLinks = {
  produto: [
    { name: 'Recursos', href: '/features' },
    { name: 'Preços', href: '/pricing' }
  ],
  suporte: [
    { name: 'Central de Ajuda', href: '/support' },
    { name: 'Contato', href: '/support' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/terms' },
    { name: 'Privacidade', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              LyraX
            </span>
            <p className="mt-4 text-sm text-gray-500">
              Onde as palavras vivem.<br />
              Uma comunidade para escritores e leitores.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Produto</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.produto.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Suporte</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.suporte.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} LyraX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}