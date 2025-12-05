"use client"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

export function BorderBeam({
  className,
  size = 200,
  duration = 6,
  colorFrom = "oklch(0.55 0.16 150)",
  colorTo = "oklch(0.65 0.12 260)",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={{
        background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
        backgroundSize: `${size}% 100%`,
        animation: `shimmer ${duration}s linear infinite`,
        maskImage: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
        WebkitMaskImage: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        padding: borderWidth,
      }}
    />
  )
}
