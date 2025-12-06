"use client"

import { useState } from "react"

const promos = [
  "Payday offer: 50% off sitewide ends in 72 hrs.",
  "7 days easy return",
  "Cash On Delivery Available",
  "Free Shipping",
  "Additional Discount on Online Payment",
]

export function PromoSlider() {
  const [autoScroll, setAutoScroll] = useState(true)

  // Create duplicate promos for seamless loop
  const displayPromos = [...promos, ...promos]

  return (
    <div
      className="relative w-full bg-black border-b border-gray-800 overflow-hidden"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Animated scrolling container */}
        <div className="relative h-12 flex items-center overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* Scrolling content */}
          <div
            className={`flex gap-6 items-center whitespace-nowrap ${autoScroll ? "animate-scroll" : ""}`}
            style={{
              animation: autoScroll ? "scroll 15s linear infinite" : "none",
            }}
          >
            {displayPromos.map((promo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center gap-6 text-sm">
                <span className="font-medium text-white">{promo}</span>
                {index < displayPromos.length - 1 && <span className="text-gray-600">|</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation for continuous scroll effect */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 24px));
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  )
}
