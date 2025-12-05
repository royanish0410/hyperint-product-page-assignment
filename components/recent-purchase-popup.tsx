"use client"

import { useEffect, useState } from "react"
import { X, MapPin, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BorderBeam } from "@/components/border-beam"

const purchases = [
  { name: "Rahul S.", location: "Mumbai", product: "Charcoal Black - Size 34", time: "2 mins ago" },
  { name: "Amit K.", location: "Delhi", product: "Navy Blue - Size 36", time: "5 mins ago" },
  { name: "Priya M.", location: "Bangalore", product: "Charcoal Black - Size 32", time: "8 mins ago" },
  { name: "Vikram R.", location: "Pune", product: "Grey - Size 38", time: "12 mins ago" },
  { name: "Deepak T.", location: "Chennai", product: "Charcoal Black - Size 34", time: "15 mins ago" },
]

export function RecentPurchasePopup() {
  const [currentPurchase, setCurrentPurchase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    const showPopup = () => {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          setCurrentPurchase((prev) => (prev + 1) % purchases.length)
        }, 500)
      }, 4000)
    }

    const initialTimeout = setTimeout(showPopup, 3000)
    const interval = setInterval(showPopup, 12000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [isDismissed])

  if (isDismissed) return null

  const purchase = purchases[currentPurchase]

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 transition-all duration-500",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0",
      )}
    >
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-4 max-w-sm overflow-hidden">
        <BorderBeam duration={4} />

        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-full"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex gap-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0 shadow-inner">
            <Image
              src="https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?width=200&format=webp"
              alt="Product"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 text-accent text-sm font-semibold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Just Purchased!</span>
            </div>
            <p className="font-semibold text-foreground truncate">{purchase.name}</p>
            <p className="text-sm text-muted-foreground truncate">{purchase.product}</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1.5">
              <MapPin className="w-3 h-3" />
              <span>{purchase.location}</span>
              <span className="text-border">•</span>
              <span>{purchase.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
