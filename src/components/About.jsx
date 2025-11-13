import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Design Philosophy</h2>
            <p className="mt-4 text-gray-600">
              We craft contemporary jewelry where art meets engineering. Each piece is designed with architectural
              precision, using ethically sourced materials and a forward-looking aesthetic inspired by light and geometry.
            </p>
            <p className="mt-4 text-gray-600">
              Our studio blends traditional craftsmanship with modern tools — from 3D modeling to hand polishing — to create
              pieces that feel timeless yet uniquely futuristic.
            </p>
            <div className="mt-6 inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3">Learn about materials</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c49?q=80&w=1400&auto=format&fit=crop"
                alt="Jewelry crafting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block w-40 h-40 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
