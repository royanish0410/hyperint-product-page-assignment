"use client"

import { useState } from "react"
import { Star, Eye, ShoppingBag, Heart, CheckCircle2, TrendingUp, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NumberTicker } from "@/components/number-ticker"
import { ShineBorder } from "@/components/shine-border"
import { BorderBeam } from "@/components/border-beam"
import Image from "next/image"
import { cn } from "@/lib/utils"

const variations = ["Minimal", "Bold", "Premium", "Social-First", "Urgency"]

export function DesignVariations() {
  const [activeVariation, setActiveVariation] = useState("Minimal")

  return (
    <section className="py-16 border-t border-border">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Widget Showcase
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Word of Mouth Variations</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Different design approaches for social proof elements
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {variations.map((variation) => (
          <Button
            key={variation}
            variant={activeVariation === variation ? "default" : "outline"}
            onClick={() => setActiveVariation(variation)}
            className={cn("rounded-full px-6 transition-all", activeVariation === variation && "shadow-lg")}
          >
            {variation}
          </Button>
        ))}
      </div>

      {/* Variation Display */}
      <div className="max-w-4xl mx-auto">
        {activeVariation === "Minimal" && <MinimalVariation />}
        {activeVariation === "Bold" && <BoldVariation />}
        {activeVariation === "Premium" && <PremiumVariation />}
        {activeVariation === "Social-First" && <SocialFirstVariation />}
        {activeVariation === "Urgency" && <UrgencyVariation />}
      </div>
    </section>
  )
}

function MinimalVariation() {
  return (
    <Card className="border-border overflow-hidden animate-fade-in-up">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Minimal Design</h3>
        <p className="text-muted-foreground mb-8">Clean, subtle social proof that doesn&apos;t overwhelm</p>

        <div className="space-y-6">
          {/* Simple Stats Row */}
          <div className="flex items-center gap-8 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-foreground">4.8</span> (198)
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span className="font-semibold text-foreground">47</span> viewing
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <ShoppingBag className="w-4 h-4" />
              <span className="font-semibold text-foreground">280</span> sold
            </span>
          </div>

          {/* Minimal Review */}
          <div className="border-l-4 border-primary/30 pl-6 py-2">
            <p className="text-lg italic text-muted-foreground">&quot;Perfect fit and excellent quality!&quot;</p>
            <p className="text-sm text-muted-foreground mt-2">— Deepika S., Verified Buyer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function BoldVariation() {
  return (
    <ShineBorder className="animate-fade-in-up" borderRadius={16}>
      <Card className="border-0 overflow-hidden">
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold mb-2 text-foreground">Bold Design</h3>
          <p className="text-muted-foreground mb-8">High-impact social proof with strong visual hierarchy</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: 4.8, suffix: "★", label: "Rating", color: "bg-yellow-500" },
              { value: 15, suffix: "K+", label: "Customers", color: "bg-primary" },
              { value: 25, suffix: "K+", label: "Sold", color: "bg-accent" },
              { value: 98, suffix: "%", label: "Recommend", color: "bg-green-500" },
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} text-white rounded-2xl p-5 text-center`}>
                <div className="text-3xl font-bold">
                  <NumberTicker value={stat.value} decimalPlaces={stat.suffix === "★" ? 1 : 0} delay={i * 0.1} />
                  {stat.suffix}
                </div>
                <div className="text-sm opacity-90 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bold Review Card */}
          <div className="bg-muted/50 rounded-2xl p-5">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                DS
              </div>
              <div>
                <p className="font-semibold text-foreground">Deepika S.</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Badge className="ml-auto bg-accent text-accent-foreground">Verified</Badge>
            </div>
            <p className="text-muted-foreground">
              &quot;Best trousers I&apos;ve ever bought! Perfect for office wear.&quot;
            </p>
          </div>
        </CardContent>
      </Card>
    </ShineBorder>
  )
}

function PremiumVariation() {
  return (
    <Card className="border-border overflow-hidden animate-fade-in-up">
      <CardContent className="p-8 bg-gradient-to-br from-card via-card to-muted/30">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Premium Design</h3>
        <p className="text-muted-foreground mb-8">Elegant social proof for luxury positioning</p>

        <div className="flex items-center justify-center gap-12 mb-10 py-6 border-y border-border">
          <div className="text-center">
            <div className="text-5xl font-light text-foreground">
              <NumberTicker value={4.8} decimalPlaces={1} delay={0.2} />
            </div>
            <div className="flex justify-center gap-0.5 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Excellence</p>
          </div>
          <div className="w-px h-20 bg-border" />
          <div className="text-center">
            <div className="text-5xl font-light text-foreground">15K+</div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-3">Satisfied Clients</p>
          </div>
          <div className="w-px h-20 bg-border" />
          <div className="text-center">
            <div className="text-5xl font-light text-foreground">98%</div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-3">Recommend</p>
          </div>
        </div>

        {/* Premium Testimonial */}
        <blockquote className="text-center max-w-2xl mx-auto">
          <p className="text-xl italic text-muted-foreground mb-4 leading-relaxed">
            &quot;The quality speaks for itself. These trousers elevate any professional wardrobe.&quot;
          </p>
          <footer className="text-sm text-foreground font-medium">— Rahul Mehta, Business Executive</footer>
        </blockquote>
      </CardContent>
    </Card>
  )
}

function SocialFirstVariation() {
  return (
    <Card className="border-border overflow-hidden animate-fade-in-up">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Social-First Design</h3>
        <p className="text-muted-foreground mb-8">User-generated content focused approach</p>

        {/* Photo Reviews Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-foreground">Customer Photos</span>
            <Button variant="link" className="text-primary p-0 h-auto">
              View all 234 photos →
            </Button>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-muted group cursor-pointer">
                <Image
                  src={`/customer-wearing-formal-trousers-photo-.jpg?height=100&width=100&query=customer wearing formal trousers photo ${i + 1}`}
                  alt={`Customer photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="space-y-3">
          <span className="font-medium text-foreground">Live Activity</span>
          {[
            { action: "purchased", name: "Amit K.", time: "2 min ago", location: "Delhi" },
            { action: "reviewed", name: "Priya M.", time: "5 min ago", rating: 5 },
            { action: "wishlisted", name: "Vikram R.", time: "8 min ago" },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-sm p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                {activity.action === "purchased" && <ShoppingBag className="w-5 h-5 text-primary" />}
                {activity.action === "reviewed" && <Star className="w-5 h-5 text-yellow-500" />}
                {activity.action === "wishlisted" && <Heart className="w-5 h-5 text-destructive" />}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-foreground">{activity.name}</span>
                <span className="text-muted-foreground"> {activity.action} this item</span>
                {activity.location && <span className="text-muted-foreground"> from {activity.location}</span>}
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function UrgencyVariation() {
  return (
    <div className="relative animate-fade-in-up">
      <Card className="border-destructive/30 overflow-hidden">
        <BorderBeam colorFrom="oklch(0.577 0.245 27.325)" colorTo="oklch(0.65 0.2 40)" duration={5} />
        <CardContent className="p-8 bg-gradient-to-br from-destructive/5 to-card">
          <h3 className="text-xl font-semibold mb-2 text-foreground">Urgency Design</h3>
          <p className="text-muted-foreground mb-8">FOMO-driven social proof for conversions</p>

          {/* Urgency Alerts */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-4 bg-destructive/10 text-destructive rounded-xl p-4 border border-destructive/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
              </span>
              <Eye className="w-5 h-5" />
              <span className="text-sm font-semibold">47 people are viewing this right now!</span>
            </div>

            <div className="flex items-center gap-4 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl p-4 border border-orange-500/20">
              <Zap className="w-5 h-5" />
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-semibold">23 sold in the last 24 hours</span>
            </div>

            <div className="flex items-center gap-4 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-xl p-4 border border-yellow-500/20">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-semibold">Last 3 customers rated 5 stars</span>
            </div>
          </div>

          {/* Stock Warning */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-foreground">Only 12 left in stock!</span>
              <Badge variant="destructive" className="animate-pulse">
                HIGH DEMAND
              </Badge>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-destructive to-orange-500 h-3 rounded-full transition-all"
                style={{ width: "15%" }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Order within <span className="font-semibold text-foreground">2 hours</span> for same-day dispatch
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
