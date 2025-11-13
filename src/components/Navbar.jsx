import { useState } from 'react'
import { Menu, X, Gem } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-md bg-white/60 border border-white/40 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
                <Gem size={20} />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Aurora Jewels</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#collections" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow hover:shadow-md transition-all">
                Shop Now
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-white/60"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/50 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-800 hover:bg-white/70"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#collections"
                onClick={() => setOpen(false)}
                className="block text-center rounded-lg px-3 py-2 bg-gray-900 text-white"
              >
                Shop Now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
