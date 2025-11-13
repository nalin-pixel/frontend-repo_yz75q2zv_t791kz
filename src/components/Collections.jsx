import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Luminous Halo',
    description: 'Iridescent crystal set in brushed platinum. Inspired by refracted light.',
    price: '$289',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Prism Cuff',
    description: 'Angular cuff with mirror facets that dance with your every move.',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1692843529895-225d7b3420d3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcmlzbSUyMEN1ZmZ8ZW58MHwwfHx8MTc2MzAyOTIzNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Nova Pendant',
    description: 'Minimal pendant featuring a floating diamond-grade crystal.',
    price: '$219',
    image: 'https://images.unsplash.com/photo-1625670413987-0ae649494c61?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMwMjkyMzR8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/40 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Collections</h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Contemporary pieces with a futuristic edge — designed to reflect your inner brilliance.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-indigo-600">
            <Sparkles />
            Limited Edition
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-indigo-600 font-medium">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:shadow">
                    Add to Cart
                  </button>
                  <button className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/5 hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
