import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"

// Lazy load project galleries and sections below the fold
const Projects = dynamic(() => import("@/components/projects").then((mod) => ({ default: mod.Projects })), {
  loading: () => <div className="h-screen bg-[#f8f6f1]" />,
})
const TileProjects = dynamic(() => import("@/components/tile-projects").then((mod) => ({ default: mod.TileProjects })), {
  loading: () => <div className="h-screen bg-[#f8f6f1]" />,
})
const ConcreteProjects = dynamic(() => import("@/components/concrete-projects").then((mod) => ({ default: mod.ConcreteProjects })), {
  loading: () => <div className="h-screen bg-[#f8f6f1]" />,
})
const FencesProjects = dynamic(() => import("@/components/fences-projects").then((mod) => ({ default: mod.FencesProjects })), {
  loading: () => <div className="h-screen bg-[#f8f6f1]" />,
})
const VideoSection = dynamic(() => import("@/components/video-section").then((mod) => ({ default: mod.VideoSection })), {
  loading: () => <div className="h-screen bg-[#1a1a1a]" />,
})
const Reviews = dynamic(() => import("@/components/reviews").then((mod) => ({ default: mod.Reviews })), {
  loading: () => <div className="h-screen bg-[#a65d3f]" />,
})
const Contact = dynamic(() => import("@/components/contact").then((mod) => ({ default: mod.Contact })), {
  loading: () => <div className="h-screen bg-[#f8f6f1]" />,
})
const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="h-64 bg-[#1a1a1a]" />,
})
// Import MobileCTABar normally (no ssr option needed in Server Components)
import { MobileCTABar } from "@/components/mobile-cta-bar"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TileProjects />
      <ConcreteProjects />
      <FencesProjects />
      <VideoSection />
      <Reviews />
      <Contact />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
