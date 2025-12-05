"use client"

import { Star, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Navy Blue Formal Trousers",
    price: 1349,
    originalPrice: 2699,
    rating: 4.7,
    reviews: 156,
    image: "https://image.cdn.shpy.in/438426/CharcoalBlack3-1764068896062.png?width=400&format=webp",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Grey Slim Fit Trousers",
    price: 1249,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 89,
    image: "https://image.cdn.shpy.in/438426/CharcoalBlack4-1764068895409.png?width=400&format=webp",
    badge: "New",
  },
  {
    id: 3,
    name: "Black Classic Trousers",
    price: 1449,
    originalPrice: 2899,
    rating: 4.9,
    reviews: 234,
    image: "https://image.cdn.shpy.in/438426/CharcoalBlack5-1764068894754.png?width=400&format=webp",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Beige Cotton Trousers",
    price: 1199,
    originalPrice: 2399,
    rating: 4.5,
    reviews: 67,
    image: "https://image.cdn.shpy.in/438426/CharcoalBlack6-1764068897951.png?width=400&format=webp",
  },
]

export function RelatedProducts() {
  const [wishlisted, setWishlisted] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlisted((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 border-t border-border">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">You May Also Like</h2>
          <p className="text-muted-foreground">Complete your wardrobe with these essentials</p>
        </div>
        <Button variant="outline" className="hidden md:flex rounded-full bg-transparent">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20"
          >
            <div className="relative aspect-[3/4] bg-muted overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              {product.badge && (
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{product.badge}</Badge>
              )}
              <Button
                variant="secondary"
                size="icon"
                className={cn(
                  "absolute top-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-all glass",
                  wishlisted.includes(product.id) && "opacity-100",
                )}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart
                  className={cn(
                    "w-4 h-4 transition-colors",
                    wishlisted.includes(product.id) && "fill-destructive text-destructive",
                  )}
                />
              </Button>
              <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <Button className="w-full rounded-xl font-semibold">Quick Add</Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-1 truncate group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-6 md:hidden rounded-xl bg-transparent">
        View All Products
      </Button>
    </section>
  )
}
