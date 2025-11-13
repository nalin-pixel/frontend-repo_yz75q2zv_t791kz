import { Gem } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
                <Gem size={18} />
              </div>
              <span className="text-lg font-bold">Aurora Jewels</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">
              Futuristic jewelry designed to reflect who you are. Ethically made. Built to last.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#collections" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#collections" className="hover:text-gray-900">Rings</a></li>
              <li><a href="#collections" className="hover:text-gray-900">Necklaces</a></li>
              <li><a href="#collections" className="hover:text-gray-900">Bracelets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#testimonials" className="hover:text-gray-900">Reviews</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Be the first to hear about drops.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Your email"
                className="flex-1 rounded-xl border border-black/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="rounded-xl bg-gray-900 px-4 py-2 text-sm text-white">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Aurora Jewels. All rights reserved.</div>
      </div>
    </footer>
  )
}
