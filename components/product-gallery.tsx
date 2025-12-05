"use client"

import { useState } from "react"
import { ZoomIn } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const thumbnails = [
  "https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?width=600&format=webp",
  "https://image.cdn.shpy.in/438426/CharcoalBlack5-1764068894754.png?width=600&format=webp",
  "https://image.cdn.shpy.in/438426/CharcoalBlack4-1764068895409.png?width=600&format=webp",
  "https://image.cdn.shpy.in/438426/CharcoalBlack3-1764068896062.png?width=600&format=webp",
  "https://image.cdn.shpy.in/438426/CharcoalBlack2-1764068897060.png?width=600&format=webp",
  "https://image.cdn.shpy.in/438426/CharcoalBlack6-1764068897951.png?width=600&format=webp",
  "https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?width=600&format=webp",
]

const featureImages = {
  waistband: "https://image.cdn.shpy.in/438426/CharcoalBlack4-1764068895409.png?width=200&format=webp",
  pockets: "https://image.cdn.shpy.in/438426/CharcoalBlack3-1764068896062.png?width=200&format=webp",
  stitch: "https://image.cdn.shpy.in/438426/CharcoalBlack2-1764068897060.png?width=200&format=webp",
  weave: "https://image.cdn.shpy.in/438426/CharcoalBlack6-1764068897951.png?width=200&format=webp",
}

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2 w-16 flex-shrink-0">
        {thumbnails.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative w-16 h-20 rounded border overflow-hidden transition-all bg-gray-50",
              selectedImage === index
                ? "border-gray-400 ring-1 ring-gray-400"
                : "border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              fill
              className="object-cover object-top"
              unoptimized
            />
          </button>
        ))}
      </div>

      <div className="relative flex-1 bg-[#f5f0e6] rounded overflow-hidden">
        {/* Zoom button */}
        <button
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <ZoomIn className="w-4 h-4 text-gray-600" />
        </button>

        {/* Rating badge - exactly like screenshot */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex flex-col items-start">
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">500+ Units Sold</div>
          </div>
        </div>

        {/* Main model image */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={thumbnails[selectedImage] || "/placeholder.svg"}
            alt="Product main view"
            fill
            className={cn(
              "object-contain object-center transition-transform duration-500",
              isZoomed ? "scale-150" : "",
            )}
            priority
            unoptimized
          />
        </div>

        {/* Tailored Fit Waistband - top left */}
        <div className="absolute top-[30%] left-[8%] flex items-center gap-2">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 leading-tight">Tailored Fit</p>
            <p className="text-xs font-bold text-gray-800">Waistband</p>
          </div>
          <div className="w-16 h-0.5 bg-gray-400" />
          <div className="w-14 h-14 border border-gray-300 rounded overflow-hidden bg-white">
            <Image
              src={featureImages.waistband || "/placeholder.svg"}
              alt="Waistband detail"
              width={56}
              height={56}
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Functional Cross Pockets - top right */}
        <div className="absolute top-[35%] right-[5%] flex items-center gap-2">
          <div className="w-14 h-14 border border-gray-300 rounded overflow-hidden bg-white">
            <Image
              src={featureImages.pockets || "/placeholder.svg"}
              alt="Pockets detail"
              width={56}
              height={56}
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-12 h-0.5 bg-gray-400" />
          <div className="text-left">
            <p className="text-xs font-bold text-gray-800 leading-tight">Functional</p>
            <p className="text-xs font-bold text-gray-800">Cross Pockets</p>
          </div>
        </div>

        {/* Artisan Stitch Precision - bottom left */}
        <div className="absolute bottom-[20%] left-[5%] flex items-center gap-2">
          <div className="w-14 h-14 border border-gray-300 rounded overflow-hidden bg-white">
            <Image
              src={featureImages.stitch || "/placeholder.svg"}
              alt="Stitch detail"
              width={56}
              height={56}
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-8 h-0.5 bg-gray-400" />
          <div className="text-left">
            <p className="text-xs font-bold text-gray-800 leading-tight">Artisan Stitch</p>
            <p className="text-xs font-bold text-gray-800">Precision</p>
          </div>
        </div>

        {/* Premium Natural Weave - bottom right */}
        <div className="absolute bottom-[15%] right-[8%] flex items-center gap-2">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 leading-tight">Premium</p>
            <p className="text-xs font-bold text-gray-800">Natural Weave</p>
          </div>
          <div className="w-10 h-0.5 bg-gray-400" />
          <div className="w-14 h-14 border border-gray-300 rounded overflow-hidden bg-white">
            <Image
              src={featureImages.weave || "/placeholder.svg"}
              alt="Weave detail"
              width={56}
              height={56}
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}
