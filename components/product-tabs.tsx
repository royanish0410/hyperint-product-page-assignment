"use client"

import { useState } from "react"
import { ChevronDown, Sparkles, Ruler, Truck, RefreshCw, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    title: "Key Features",
    icon: Sparkles,
    content: [
      "Premium Lycra Cotton blend for maximum comfort",
      "Stretchable fabric for easy movement",
      "Polo fit design for modern look",
      "Wrinkle-resistant material",
      "Machine washable - easy care",
      "Available in multiple colors",
    ],
  },
  {
    title: "Size Chart",
    icon: Ruler,
    content: [
      'Size 32: Waist 32", Length 40"',
      'Size 34: Waist 34", Length 41"',
      'Size 36: Waist 36", Length 42"',
      'Size 38: Waist 38", Length 43"',
    ],
  },
  {
    title: "Shipping Policy",
    icon: Truck,
    content: [
      "Free shipping on orders above ₹999",
      "Standard delivery: 3-5 business days",
      "Express delivery: 1-2 business days (₹99 extra)",
      "COD available on all orders",
    ],
  },
  {
    title: "Return & Exchange",
    icon: RefreshCw,
    content: [
      "Easy 7-day return policy",
      "Free exchanges for size issues",
      "Refund processed within 5-7 days",
      "Product must be unused with tags intact",
    ],
  },
]

export function ProductTabs() {
  const [openTab, setOpenTab] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {tabs.map((tab, index) => {
        const Icon = tab.icon
        return (
          <div
            key={index}
            className={cn(
              "border rounded-2xl overflow-hidden transition-all duration-300",
              openTab === index ? "border-primary/30 shadow-sm" : "border-border hover:border-muted-foreground/30",
            )}
          >
            <button
              onClick={() => setOpenTab(openTab === index ? null : index)}
              className="w-full flex items-center justify-between p-5 bg-card hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center transition-colors",
                    openTab === index ? "bg-primary/10" : "bg-muted",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-colors",
                      openTab === index ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                </div>
                <span className="font-semibold text-foreground">{tab.title}</span>
              </div>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-300",
                  openTab === index && "rotate-180 text-primary",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                openTab === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="p-5 pt-0 border-t border-border bg-muted/10">
                  <ul className="space-y-3 pt-4">
                    {tab.content.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
