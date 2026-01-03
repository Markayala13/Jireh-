"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function MobileCTABar() {
  const isMobile = useMobile()

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] border-t border-[#333] lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-[#333]">
        <a
          href="mailto:Jirehdeckings2022@gmail.com"
          className="flex flex-col items-center justify-center py-3 hover:bg-[#333] transition-colors active:bg-[#a65d3f]"
        >
          <Mail className="w-5 h-5 text-[#a65d3f] mb-1" />
          <span className="text-[10px] tracking-[0.1em] uppercase text-[#f8f6f1]">Email</span>
        </a>
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center justify-center py-3 hover:bg-[#333] transition-colors active:bg-[#a65d3f]"
        >
          <MapPin className="w-5 h-5 text-[#a65d3f] mb-1" />
          <span className="text-[10px] tracking-[0.1em] uppercase text-[#f8f6f1]">Services</span>
        </button>
        <a
          href="tel:4256153720"
          className="flex flex-col items-center justify-center py-3 bg-[#a65d3f] hover:bg-[#8b4a32] transition-colors active:bg-[#8b4a32]"
        >
          <Phone className="w-5 h-5 text-[#f8f6f1] mb-1" />
          <span className="text-[10px] tracking-[0.1em] uppercase text-[#f8f6f1]">Call</span>
        </a>
      </div>
    </div>
  )
}
