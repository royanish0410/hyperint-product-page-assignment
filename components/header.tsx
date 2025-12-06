"use client"

import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { PromoSlider } from "./promo-slider"

const announcements = [
  "Flat 50% OFF on All Formal Wear",
  "Free Shipping Above ₹999",
  "Easy 7-Day Returns",
  "100% Secure Payments",
  "Premium Quality Fabrics",
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <PromoSlider />

      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-xs">
          <nav className="flex items-center gap-1 text-gray-600 flex-wrap">
            <Link href="#" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="#" className="text-blue-600 hover:underline">
              MEN&apos;S CLOTHING
            </Link>
            <span>/</span>
            <Link href="#" className="text-blue-600 hover:underline">
              FORMAL TROUSERS
            </Link>
            <span>/</span>
            <Link href="#" className="text-blue-600 hover:underline">
              PREMIUM AESTHETIC COLLECTION
            </Link>
            <span>/</span>
            <span className="text-blue-600">Lycra Cotton Stretchable | Plain Formal Trousers |...</span>
          </nav>
          <span className="text-red-600 font-bold text-base whitespace-nowrap ml-4">Flat 50% Off</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tighter">
              DMD<sup className="text-[10px] text-muted-foreground">™</sup>
            </div>
            <span className="text-[10px] text-muted-foreground hidden sm:block font-medium tracking-widest uppercase">
              Clothing
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Men", "Women", "New Arrivals", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-muted rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-muted rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-muted rounded-full">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse-glow">
                2
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 border-t border-border mt-4 flex flex-col gap-1 animate-fade-in-up">
            {["Men", "Women", "New Arrivals", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium py-3 px-2 hover:bg-muted rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
