"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedGradientTextProps {
  children: ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-flex animate-shimmer items-center justify-center",
        "bg-[length:200%_100%] bg-clip-text text-transparent",
        "bg-gradient-to-r from-primary via-accent to-primary",
        className,
      )}
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 3s linear infinite",
      }}
    >
      {children}
    </span>
  )
}
