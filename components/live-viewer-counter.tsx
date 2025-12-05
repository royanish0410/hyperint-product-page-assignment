"use client"

import { useEffect, useState } from "react"
import { Eye, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function LiveViewerCounter() {
  const [viewers, setViewers] = useState(47)
  const [recentPurchases, setRecentPurchases] = useState(23)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.floor(Math.random() * 5) - 2
        return Math.max(30, Math.min(80, prev + change))
      })
    }, 3000)

    const purchaseInterval = setInterval(() => {
      setRecentPurchases((prev) => prev + 1)
    }, 15000)

    return () => {
      clearInterval(interval)
      clearInterval(purchaseInterval)
    }
  }, [])

  return (
    <div
      className={cn(
        "flex flex-wrap gap-3 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2.5 rounded-full text-sm font-medium border border-destructive/20">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
        </span>
        <Eye className="w-4 h-4" />
        <span className="font-bold">{viewers}</span>
        <span className="hidden sm:inline">people viewing now</span>
        <span className="sm:hidden">viewing</span>
      </div>

      <div className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2.5 rounded-full text-sm font-medium border border-accent/20">
        <TrendingUp className="w-4 h-4" />
        <span className="font-bold">{recentPurchases}</span>
        <span className="hidden sm:inline">bought in last 24hrs</span>
        <span className="sm:hidden">sold today</span>
      </div>
    </div>
  )
}
