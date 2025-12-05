"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  className?: string
  startValue?: number
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  className,
  startValue = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(direction === "up" ? startValue : value)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasAnimated(true)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!hasAnimated) return

    const targetValue = direction === "up" ? value : startValue
    const startVal = direction === "up" ? startValue : value
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      const currentValue = startVal + (targetValue - startVal) * easeOutQuart
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasAnimated, value, direction, startValue])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue.toFixed(decimalPlaces)}
    </span>
  )
}
