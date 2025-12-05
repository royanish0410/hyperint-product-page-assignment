"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ShineBorderProps {
  children: ReactNode
  className?: string
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: string[]
}

export function ShineBorder({
  children,
  className,
  borderRadius = 12,
  borderWidth = 1,
  duration = 8,
  color = ["oklch(0.55 0.16 150)", "oklch(0.65 0.12 260)", "oklch(0.55 0.16 150)"],
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden p-[1px]", className)}
      style={{
        borderRadius,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(var(--shine-angle, 0deg), ${color.join(", ")})`,
          animation: `rotate-beam ${duration}s linear infinite`,
          borderRadius,
        }}
      />
      <div
        className="relative bg-background"
        style={{
          borderRadius: borderRadius - borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  )
}
