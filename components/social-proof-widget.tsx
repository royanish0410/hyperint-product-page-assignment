"use client"

import { Star, Users, ShoppingBag, ThumbsUp, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { NumberTicker } from "@/components/number-ticker"
import { Marquee } from "@/components/marquee"
import { ShineBorder } from "@/components/shine-border"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Star,
    label: "Average Rating",
    value: 4.8,
    suffix: "/5",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  { icon: Users, label: "Happy Customers", value: 15000, suffix: "+", color: "text-primary", bgColor: "bg-primary/10" },
  { icon: ShoppingBag, label: "Units Sold", value: 25000, suffix: "+", color: "text-accent", bgColor: "bg-accent/10" },
  { icon: ThumbsUp, label: "Recommend", value: 98, suffix: "%", color: "text-accent", bgColor: "bg-accent/10" },
]

const brands = ["VOGUE", "GQ", "Forbes", "ELLE", "Esquire", "Business Today", "Grazia"]

export function SocialProofWidget() {
  return (
    <section className="mt-20 mb-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Award className="w-4 h-4" />
          Trusted by Thousands
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Why Customers Love Us</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join over 15,000 satisfied customers who trust our premium formal wear
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <ShineBorder key={index} className="h-full" borderRadius={16} duration={10 + index * 2}>
            <Card className="border-0 h-full">
              <CardContent className="p-6 text-center">
                <div
                  className={cn("w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center", stat.bgColor)}
                >
                  <stat.icon className={cn("w-7 h-7", stat.color)} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-1">
                  {stat.value >= 1000 ? (
                    <>
                      <NumberTicker
                        value={stat.value / 1000}
                        decimalPlaces={stat.value >= 10000 ? 0 : 1}
                        delay={0.2 + index * 0.1}
                      />
                      K{stat.suffix}
                    </>
                  ) : (
                    <>
                      <NumberTicker
                        value={stat.value}
                        decimalPlaces={stat.label === "Average Rating" ? 1 : 0}
                        delay={0.2 + index * 0.1}
                      />
                      <span className="text-xl font-normal text-muted-foreground">{stat.suffix}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          </ShineBorder>
        ))}
      </div>

      <div className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <p className="text-sm text-muted-foreground text-center mb-6 uppercase tracking-widest font-medium">
          As Featured In
        </p>
        <Marquee pauseOnHover speed={25}>
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-3xl font-bold text-foreground/30 hover:text-foreground/60 transition-colors px-8 cursor-default"
            >
              {brand}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
