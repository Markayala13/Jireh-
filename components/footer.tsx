"use client"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a1a1a] text-[#f8f6f1] relative">
      {/* Main footer content */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Top section - Large CTA - Updated text */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 md:pb-24 border-b border-[#333]">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Ready to start
                <br />
                <span className="italic text-[#a65d3f]">your project?</span>
              </h2>
              <p className="text-[#6b6560] max-w-md">
                Let's discuss your decking, fencing, ceramic tile, or flooring project and bring your vision to life.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] bg-[#f8f6f1] px-8 py-4 hover:bg-[#a65d3f] hover:text-[#f8f6f1] transition-all duration-500 self-start lg:self-auto"
            >
              Get Free Estimate
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Middle section - Links and info - Updated brand and contact info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-24">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif text-[#f8f6f1] mb-6">Jireh Decking & Fences</h3>
              <p className="text-[#6b6560] max-w-sm leading-relaxed mb-8">
                Professional decking, fencing, ceramic tile, and flooring services for Seattle homeowners who demand
                quality craftsmanship.
              </p>
              <div className="flex gap-6 text-[11px] tracking-[0.15em] uppercase text-[#6b6560]">
                <span>20+ Years</span>
                <span>•</span>
                <span>Spanaway, WA</span>
                <span>•</span>
                <span>Free Estimates</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560] mb-6">Navigation</h3>
              <ul className="space-y-4">
                {["Projects", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Updated emails */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560] mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:4256153720"
                    className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300 text-sm"
                  >
                    (425) 615-3720
                  </a>
                </li>
                <li>
                  <a
                    href="tel:2532981154"
                    className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300 text-sm"
                  >
                    (253) 298-1154
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Jirehdeckings2022@gmail.com"
                    className="text-[#c4bdb2] hover:text-[#a65d3f] transition-colors duration-300 text-sm"
                  >
                    Jirehdeckings2022@gmail.com
                  </a>
                </li>
                <li className="pt-2 text-[#6b6560]">
                  108 163rd St S
                  <br />
                  Spanaway, WA 98387
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section - Updated copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#333]">
            <div className="text-[#6b6560] text-sm">
              © {new Date().getFullYear()} Jireh Decking & Fences. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] hover:text-[#a65d3f] transition-colors duration-300 flex items-center gap-2"
            >
              Back to top
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
