"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, 100])
  const textY = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-[#f8f6f1] overflow-hidden">
      {/* Grid overlay for architectural feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top bar with details - Updated company info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-28 md:pt-32 px-6 md:px-12 flex justify-between items-start"
        >
          <div className="hidden lg:flex items-center gap-12 text-[11px] tracking-[0.3em] uppercase text-[#6b6560] ml-auto">
            <span>Seattle, WA</span>
            <span>20+ Years Experience</span>
          </div>
        </motion.div>

        {/* Hero Typography - Updated headline */}
        <motion.div
          className="flex-1 flex items-center justify-center px-6 md:px-12 py-12"
          style={{ y: mounted ? textY : 0, opacity: mounted ? opacity : 1 }}
        >
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.h1 className="font-serif text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-[-0.02em] text-[#1a1a1a] text-center">
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block font-light"
              >
                Expert Decking
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block font-light italic text-[#a65d3f]"
              >
                & Fencing
              </motion.span>
            </motion.h1>

            {/* Subtitle - Updated description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-center mt-8 md:mt-12 text-[15px] md:text-lg text-[#6b6560] max-w-xl mx-auto leading-relaxed tracking-wide"
            >
              Professional decking, fencing, ceramic tile, and flooring services for Seattle homeowners who demand
              quality craftsmanship.
            </motion.p>

            {/* CTAs - Updated button text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 md:mt-14"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#f8f6f1] bg-[#1a1a1a] px-8 py-4 hover:bg-[#a65d3f] transition-all duration-500"
              >
                Get FREE Estimate
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] hover:text-[#a65d3f] transition-colors duration-300"
              >
                View Our Work
                <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom image strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="relative h-[30vh] md:h-[40vh]"
          style={{ y: mounted ? imageY : 0 }}
        >
          <div className="absolute inset-x-6 md:inset-x-12 inset-y-0 overflow-hidden">
            <img
              src="/hero.jpg"
              alt="Professional decking and construction work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f8f6f1] via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#6b6560]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-[#a65d3f]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
