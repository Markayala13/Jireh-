"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Plus, Star } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Custom Decking",
    subtitle: "Residential & Commercial",
    description:
      "We specialize in custom deck design and installation for residential and commercial properties. Our expertise includes composite decking, wood decking, multi-level designs, and complete outdoor living spaces. From concept to completion, we create beautiful, durable decks that enhance your property's value and functionality.",
    image: "/decking/charming-front-porch-with-rocking-chairs-plants.jpg",
    featured: true,
    details: [
      "Custom Deck Design & Installation",
      "Composite & Wood Decking",
      "Multi-Level Deck Structures",
      "Deck Repairs & Restoration",
      "Railings & Stairs",
      "Outdoor Living Spaces",
      "FREE Estimates on All Deck Projects",
    ],
  },
  {
    id: "02",
    title: "Quality Fencing",
    subtitle: "All Styles & Materials",
    description:
      "Complete fencing services for residential and commercial properties. We work with all fence materials including wood, vinyl, chain-link, and composite. Our services cover privacy fences, decorative fencing, security fencing, and custom designs to match your property's aesthetic and functional needs.",
    image: "/fences/fence-built-from-woodsecurity-privacy-concept.jpg",
    details: [
      "Wood, Vinyl, Chain-Link, Composite",
      "Privacy & Security Fencing",
      "Decorative Fence Designs",
      "Fence Repairs & Replacement",
      "Custom Gates & Access Points",
      "Residential & Commercial Applications",
    ],
  },
  {
    id: "03",
    title: "Ceramic Tile Installation",
    subtitle: "Interior & Exterior",
    description:
      "Professional ceramic tile installation for all areas of your home or business. We handle floors, walls, bathrooms, kitchens, and outdoor spaces. Expert installation of ceramic, porcelain, natural stone, and decorative tiles with precision and attention to detail.",
    image: "/tile/person-wearing-glove-that-says-uninterested-it.jpg",
    details: [
      "Ceramic & Porcelain Tile",
      "Natural Stone Installation",
      "Floor & Wall Tiling",
      "Bathroom & Kitchen Backsplashes",
      "Outdoor Tile Applications",
      "Custom Patterns & Designs",
    ],
  },
  {
    id: "04",
    title: "Professional Flooring",
    subtitle: "All Types",
    description: "Complete flooring services including hardwood, laminate, vinyl, and tile. Expert installation with quality materials and professional craftsmanship.",
    image: "/floring/beautiful-kitchen-interior-design (1).jpg",
    details: ["Hardwood Flooring", "Laminate & Vinyl Installation", "Tile Flooring", "Floor Repairs & Refinishing"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState<string | null>("01") // Stucco open by default

  return (
    <section id="services" className="py-24 md:py-40 bg-[#1a1a1a] relative" ref={ref}>
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">(Our Services)</span>
            <span className="flex-1 h-px bg-[#333]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">02</span>
          </motion.div>

          {/* Title - Updated */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f8f6f1] leading-[1.1]">
              Professional <span className="italic text-[#a65d3f]">decking & fencing</span>
              <br className="hidden md:block" /> construction services
            </h2>
          </motion.div>

          {/* Services List - Accordion style */}
          <div className="border-t border-[#333]">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="border-b border-[#333]"
              >
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full py-8 md:py-10 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-[#6b6560] text-sm">{service.id}</span>
                    <div className="text-left">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-2xl md:text-4xl text-[#f8f6f1] group-hover:text-[#a65d3f] transition-colors duration-500">
                          {service.title}
                        </h3>
                        {service.featured && (
                          <span className="flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-[#a65d3f] border border-[#a65d3f] px-2 py-1">
                            <Star className="w-3 h-3 fill-current" />
                            Specialty
                          </span>
                        )}
                      </div>
                      <span className="text-[12px] tracking-[0.15em] uppercase text-[#6b6560] mt-1 block">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-[12px] tracking-[0.15em] uppercase text-[#6b6560] group-hover:text-[#a65d3f] transition-colors duration-300">
                      {activeService === service.id ? "Close" : "Learn More"}
                    </span>
                    <div
                      className={`w-10 h-10 border border-[#333] flex items-center justify-center transition-all duration-500 group-hover:border-[#a65d3f] ${activeService === service.id ? "bg-[#a65d3f] border-[#a65d3f]" : ""}`}
                    >
                      <Plus
                        className={`w-5 h-5 transition-all duration-500 ${activeService === service.id ? "rotate-45 text-[#f8f6f1]" : "text-[#f8f6f1]"}`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeService === service.id ? "auto" : 0,
                    opacity: activeService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 grid md:grid-cols-2 gap-8 md:gap-12 pl-12 md:pl-24">
                    <div>
                      <p className="text-[#c4bdb2] leading-relaxed mb-6">{service.description}</p>
                      {service.details && (
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[#6b6560] text-sm">
                              <span className="w-1.5 h-1.5 bg-[#a65d3f] rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Updated text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <p className="text-[#6b6560] max-w-md">
              Ready to start your project? Contact us today for a free estimate on any of our services.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] bg-[#f8f6f1] px-8 py-4 hover:bg-[#a65d3f] hover:text-[#f8f6f1] transition-all duration-500"
            >
              Get Free Estimate
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
