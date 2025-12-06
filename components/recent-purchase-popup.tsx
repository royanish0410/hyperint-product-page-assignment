"use client"

import { useEffect, useState } from "react"
import { X, MapPin, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    const showPopup = () => {
      setIsAnimating(true)
      setIsVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => {
          setIsVisible(false)
          // Change to next purchase
          setTimeout(() => {
            setCurrentPurchase((prev) => (prev + 1) % purchases.length)
          }, 300)
        }, 300)
      }, 5000)
    }

    // Initial show after 2 seconds
    const initialTimeout = setTimeout(showPopup, 2000)
    // Repeat every 10 seconds
    const interval = setInterval(showPopup, 10000)

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
        "fixed bottom-6 left-6 z-50 transition-all duration-500 ease-out",
        isVisible && isAnimating
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-4 opacity-0 scale-95 pointer-events-none",
      )}
    >
      <div className="relative bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-[320px] border border-gray-100 overflow-hidden">
        {/* Animated gradient border */}
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-0 animate-pulse"
          style={{ padding: "1px" }}
        />

        {/* Progress bar animation */}
        <div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 animate-[shrink_5s_linear]"
          style={{
            width: isAnimating ? "0%" : "100%",
            transition: isAnimating ? "width 5s linear" : "none",
          }}
        />

        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1.5 hover:bg-gray-100 rounded-full z-10"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex gap-3">
          {/* Product image */}
          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 ring-2 ring-gray-100">
            <Image
              src="https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?width=200&format=webp"
              alt="Product"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Someone just purchased!</span>
              </div>
            </div>
            <p className="font-semibold text-gray-900 text-sm truncate">{purchase.name}</p>
            <p className="text-xs text-gray-600 truncate">{purchase.product}</p>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-1">
              <MapPin className="w-3 h-3" />
              <span>{purchase.location}</span>
              <span>•</span>
              <span>{purchase.time}</span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-emerald-500/5 rounded-full" />
        <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-emerald-500/10 rounded-full" />
      </div>
    </div>
  )
}
