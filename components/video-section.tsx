"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const ref = useRef(null)
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)

  const handlePlayClick1 = () => {
    if (videoRef1.current) {
      videoRef1.current.play()
      setIsPlaying1(true)
    }
  }

  const handlePlayClick2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play()
      setIsPlaying2(true)
    }
  }

  return (
    <section id="video" className="py-24 md:py-40 bg-[#1a1a1a] relative overflow-hidden" ref={ref}>
      {/* Background image - translucent */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/stu.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">(Our Work)</span>
            <span className="flex-1 h-px bg-[#333]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c4bdb2]">03</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f8f6f1] leading-[1.1] mb-6">
              See our
              <br />
              <span className="italic text-[#a65d3f]">craftsmanship</span>
            </h2>
            <p className="text-[#c4bdb2] text-lg max-w-2xl mx-auto">
              Watch how we transform homes throughout Seattle with professional decking, fencing, ceramic tile, and flooring services.
            </p>
          </motion.div>

          {/* Video containers - Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[950px] mx-auto">
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[9/16] w-full max-w-[380px] md:max-w-[450px] max-h-[680px] md:max-h-[800px] mx-auto overflow-hidden rounded-sm"
            >
              <video
                ref={videoRef1}
                controls
                poster="/hero2.jpeg"
                className="w-full h-full object-cover"
                preload="metadata"
                loading="lazy"
                onPlay={() => setIsPlaying1(true)}
                onPause={() => setIsPlaying1(false)}
              >
                <source src="/videos/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay */}
              {!isPlaying1 && (
                <button
                  onClick={handlePlayClick1}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#a65d3f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-[#f8f6f1] fill-[#f8f6f1] ml-1" />
                  </div>
                </button>
              )}
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative aspect-[9/16] w-full max-w-[380px] md:max-w-[450px] max-h-[680px] md:max-h-[800px] mx-auto overflow-hidden rounded-sm"
            >
              <video
                ref={videoRef2}
                controls
                poster="/hero.jpg"
                className="w-full h-full object-cover"
                preload="metadata"
                loading="lazy"
                onPlay={() => setIsPlaying2(true)}
                onPause={() => setIsPlaying2(false)}
              >
                <source src="/videos/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay */}
              {!isPlaying2 && (
                <button
                  onClick={handlePlayClick2}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#a65d3f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-[#f8f6f1] fill-[#f8f6f1] ml-1" />
                  </div>
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
