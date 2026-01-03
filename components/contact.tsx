"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry. We'll be in touch within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#f8f6f1] relative" ref={ref}>
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">(Get In Touch)</span>
            <span className="flex-1 h-px bg-[#e8e4dc]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">05</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Form - Updated text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] mb-6">
                Get your
                <br />
                <span className="italic text-[#a65d3f]">free estimate</span>
              </h2>
              <p className="text-[#6b6560] mb-10 max-w-md">
                Tell us about your project. We'll respond within 24 hours with a free, no-obligation estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#e8e4dc] text-[#1a1a1a] focus:border-[#a65d3f] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-3"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#e8e4dc] text-[#1a1a1a] focus:border-[#a65d3f] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-3">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#e8e4dc] text-[#1a1a1a] focus:border-[#a65d3f] focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-3"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#e8e4dc] text-[#1a1a1a] focus:border-[#a65d3f] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="decking">Custom Decking</option>
                    <option value="fencing">Quality Fencing</option>
                    <option value="ceramic">Ceramic Tile Installation</option>
                    <option value="flooring">Professional Flooring</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-3"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#e8e4dc] text-[#1a1a1a] focus:border-[#a65d3f] focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#f8f6f1] bg-[#1a1a1a] px-8 py-4 hover:bg-[#a65d3f] transition-all duration-500 mt-8"
                >
                  Get FREE Estimate
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>

            {/* Right - Contact info - Updated contact details */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:pl-12"
            >
              <div className="bg-[#1a1a1a] p-8 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f8f6f1] mb-8">
                    Ready to start
                    <br />
                    your project?
                  </h3>

                  <div className="space-y-8">
                    <a href="tel:4256153720" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 border border-[#333] flex items-center justify-center group-hover:border-[#a65d3f] transition-colors duration-300">
                        <Phone className="w-5 h-5 text-[#a65d3f]" />
                      </div>
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-1">Call Us</div>
                        <div className="text-[#f8f6f1] text-lg group-hover:text-[#a65d3f] transition-colors duration-300">
                          (425) 615-3720
                        </div>
                      </div>
                    </a>

                    <a href="tel:2532981154" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 border border-[#333] flex items-center justify-center group-hover:border-[#a65d3f] transition-colors duration-300">
                        <Phone className="w-5 h-5 text-[#a65d3f]" />
                      </div>
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-1">Alternative Phone</div>
                        <div className="text-[#f8f6f1] text-lg group-hover:text-[#a65d3f] transition-colors duration-300">
                          (253) 298-1154
                        </div>
                      </div>
                    </a>

                    <a href="mailto:Jirehdeckings2022@gmail.com" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 border border-[#333] flex items-center justify-center group-hover:border-[#a65d3f] transition-colors duration-300">
                        <Mail className="w-5 h-5 text-[#a65d3f]" />
                      </div>
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-1">Email Us</div>
                        <div className="text-[#f8f6f1] text-lg group-hover:text-[#a65d3f] transition-colors duration-300 break-all">
                          Jirehdeckings2022@gmail.com
                        </div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border border-[#333] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#a65d3f]" />
                      </div>
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-1">Address</div>
                        <div className="text-[#f8f6f1] text-lg">
                          108 163rd St S
                          <br />
                          <span className="text-[#6b6560] text-base">Spanaway, WA 98387</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#333]">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#6b6560] mb-4">Experience</div>
                  <div className="flex flex-wrap gap-4 text-sm text-[#c4bdb2]">
                    <span>20+ Years Experience</span>
                    <span>•</span>
                    <span>Licensed & Insured</span>
                    <span>•</span>
                    <span>Free Estimates</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
