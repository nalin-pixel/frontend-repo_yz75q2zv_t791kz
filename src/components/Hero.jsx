import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-gray-700 ring-1 ring-black/5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            New Collection Drops Weekly
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Crafted Brilliance
            </span>
            <br />
            <span className="text-gray-900">Jewelry for Every Story</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Discover premium pieces inspired by light, geometry and modern artistry. Wear the future — today.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#collections" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 shadow hover:shadow-md transition-all">
              Explore Collections
            </a>
            <a href="#about" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-gray-800 ring-1 ring-black/5 hover:bg-white">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
