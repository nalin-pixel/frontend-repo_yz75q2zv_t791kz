import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Amelia R.',
    text: 'The Nova Pendant is stunning — it catches the light in the most beautiful way. I get compliments every day!',
  },
  {
    name: 'Jordan K.',
    text: 'Incredible quality and unique design. It genuinely feels like wearing a tiny piece of the future.',
  },
  {
    name: 'Priya S.',
    text: 'Elegant, minimal and thoughtfully crafted. Shipping was fast and the packaging is gorgeous.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Loved by our community</h2>
          <p className="mt-3 text-gray-600">Real words from people who wear Aurora every day.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-gray-700">{r.text}</p>
              <p className="mt-3 text-sm font-semibold text-gray-900">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
