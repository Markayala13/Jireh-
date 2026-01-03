"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Terrace with Wood Deck",
    category: "Decking",
    year: "2024",
    image: "/decking/beautiful-modern-terrace-with-wood-deck-flooring-fence-green-potted-flowers-plants.jpg",
  },
  {
    id: 2,
    title: "Charming Front Porch",
    category: "Decking",
    year: "2024",
    image: "/decking/charming-front-porch-with-rocking-chairs-plants.jpg",
  },
  {
    id: 3,
    title: "Composite Decking Installation",
    category: "Decking",
    year: "2024",
    image: "/decking/composite-decking-boards-made-from-wood-plastic (1).jpg",
  },
  {
    id: 4,
    title: "Wood Plastic Composite Deck",
    category: "Decking",
    year: "2024",
    image: "/decking/composite-decking-boards-made-from-wood-plastic.jpg",
  },
  {
    id: 5,
    title: "Contemporary Ranch Style Porch",
    category: "Decking",
    year: "2024",
    image: "/decking/contemporary-modern-ranchstyle-house-suburbs-its-porch-with-decking-boards-railings.jpg",
  },
  {
    id: 6,
    title: "Porch with White Railings",
    category: "Decking",
    year: "2024",
    image: "/decking/decking-boards-porch-with-white-railings-suburb-house.jpg",
  },
  {
    id: 7,
    title: "Back Garden Patio with Wood Decking",
    category: "Decking",
    year: "2024",
    image: "/decking/exterior-back-garden-patio-area-with-wood-decking-generative-ai.jpg",
  },
  {
    id: 8,
    title: "Iron Wood Decking Flooring",
    category: "Decking",
    year: "2024",
    image: "/decking/iron-wood-decking-flooring (1).jpg",
  },
  {
    id: 9,
    title: "Premium Iron Wood Deck",
    category: "Decking",
    year: "2024",
    image: "/decking/iron-wood-decking-flooring.jpg",
  },
  {
    id: 10,
    title: "Outdoor Patio with Wooden Decking",
    category: "Decking",
    year: "2024",
    image: "/decking/outdoor-patio-setup-with-table-chairs-wooden-decking.jpg",
  },
  {
    id: 11,
    title: "Relaxing Porch with Rocking Chairs",
    category: "Decking",
    year: "2024",
    image: "/decking/relaxing-porch-with-rocking-chairs-flowers.jpg",
  },
  {
    id: 12,
    title: "Composite Material Deck Replacement",
    category: "Decking",
    year: "2024",
    image: "/decking/replacement-old-wooden-deck-with-composite-material.jpg",
  },
  {
    id: 13,
    title: "Wooden Deck with Awning",
    category: "Decking",
    year: "2024",
    image: "/decking/wooden-deck-with-awning-patio-furniture.jpg",
  },
]

export function Projects() {
  const ref = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth
      const scrollAmount = containerWidth
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="py-24 md:py-40 bg-[#f8f6f1] relative overflow-hidden" ref={ref}>
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">(Selected Work)</span>
            <span className="flex-1 h-px bg-[#e8e4dc]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6560]">03</span>
          </motion.div>

          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[1.1]"
            >
              Decking
              <br />
              <span className="italic text-[#a65d3f]">projects</span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling projects */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        ref={scrollRef}
        className="horizontal-scroll pb-4 pl-6 md:pl-12"
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group relative w-screen sm:w-[60vw] md:w-[45vw] lg:w-[calc((100vw-6rem-4rem)/3)] flex-shrink-0 px-6 sm:px-0 sm:mr-6 md:mr-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500" />

              {/* Hover overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#f8f6f1] bg-[#a65d3f] px-6 py-3">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="w-6 md:w-12 flex-shrink-0" />
      </motion.div>

      {/* Navigation arrows - centered below carousel */}
      <div className="px-6 md:px-12 mt-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#f8f6f1] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#f8f6f1] transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
