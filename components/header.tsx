"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = ["Projects", "Services", "About", "Contact"]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-[#f8f6f1]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-32 md:h-40">
          {/* Logo - Updated to Adrian Bravo brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center -ml-16 md:ml-0"
          >
            <Image
              src="/logo/logo-removebg-preview.png"
              alt="Jireh Decking & Fences"
              width={612}
              height={408}
              className="w-64 md:w-80 h-auto mt-10 md:mt-20"
              priority
            />
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden lg:flex items-center gap-12"
          >
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group relative text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] hover:text-[#a65d3f] transition-colors duration-500"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#a65d3f] group-hover:w-full transition-all duration-500" />
                </span>
              </button>
            ))}
          </motion.nav>

          {/* CTA + Menu - Updated CTA text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase text-[#f8f6f1] bg-[#1a1a1a] px-6 py-3 hover:bg-[#a65d3f] transition-colors duration-500"
            >
              Free Estimate
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-px bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`w-6 h-px bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-6 h-px bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Full Screen Mobile Menu - Updated CTA text */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#a65d3f] flex items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-serif text-4xl text-[#f8f6f1] hover:text-[#1a1a1a] transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => scrollToSection("contact")}
                className="mt-4 text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] bg-[#f8f6f1] px-8 py-4"
              >
                Free Estimate
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
