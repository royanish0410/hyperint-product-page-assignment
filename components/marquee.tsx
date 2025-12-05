"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  className?: string
  pauseOnHover?: boolean
  reverse?: boolean
  speed?: number
}

export function Marquee({ children, className, pauseOnHover = false, reverse = false, speed = 20 }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn("flex shrink-0 gap-4", pauseOnHover && "group-hover:[animation-play-state:paused]")}
        style={{
          animation: `marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {children}
      </div>
      <div
        className={cn("flex shrink-0 gap-4", pauseOnHover && "group-hover:[animation-play-state:paused]")}
        style={{
          animation: `marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
        aria-hidden
      >
        {children}
      </div>
    </div>
  )
}
