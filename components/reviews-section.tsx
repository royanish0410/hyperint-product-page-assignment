"use client"

import { useState } from "react"
import { Star, ThumbsUp, Camera, ChevronDown, Verified } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { NumberTicker } from "@/components/number-ticker"
import Image from "next/image"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    name: "Deepika S.",
    avatar: "/indian-woman-professional-headshot.png",
    rating: 5,
    title: "It is very Good Product",
    content:
      "I bought these for my husband and he absolutely loves them. The fabric quality is amazing, very comfortable for all-day office wear. The stretch is perfect and doesn't lose shape after washing.",
    date: "2 days ago",
    verified: true,
    helpful: 24,
    images: [
      "https://image.cdn.shpy.in/438426/CharcoalBlack2-1764068897060.png?width=200&format=webp",
      "https://image.cdn.shpy.in/438426/CharcoalBlack6-1764068897951.png?width=200&format=webp",
    ],
  },
  {
    id: 2,
    name: "Vivaan Rao",
    avatar: "/indian-man-headshot.png",
    rating: 5,
    title: "Prompt Delivery",
    content:
      "The team was very helpful and guided me throughout my purchase. The trousers fit perfectly and the color is exactly as shown. Will definitely buy more colors!",
    date: "5 days ago",
    verified: true,
    helpful: 18,
    images: [],
  },
  {
    id: 3,
    name: "Priya Sharma",
    avatar: "/indian-woman-smiling-headshot.png",
    rating: 5,
    title: "Best formal trousers I've ever bought",
    content:
      "The lycra blend makes them super comfortable. I can sit for long hours without any discomfort. The polo fit is perfect for my body type. Highly recommend!",
    date: "1 week ago",
    verified: true,
    helpful: 32,
    images: ["https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?width=200&format=webp"],
  },
  {
    id: 4,
    name: "Ananya Singh",
    avatar: "/young-indian-woman-headshot.jpg",
    rating: 4,
    title: "Good quality, runs slightly large",
    content:
      "Great quality trousers. Only reason for 4 stars is that they run a bit large. I ordered my usual size and it was slightly loose. Would recommend sizing down.",
    date: "2 weeks ago",
    verified: true,
    helpful: 15,
    images: [],
  },
]

const ratingBreakdown = [
  { stars: 5, count: 1900, percentage: 98 },
  { stars: 4, count: 62, percentage: 3 },
  { stars: 3, count: 0, percentage: 0 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 },
]

export function ReviewsSection() {
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState("all")

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3)

  return (
    <section className="py-16 border-t border-border">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-80 flex-shrink-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Reviews & Ratings</h2>

          <Card className="border-border mb-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 text-center border-b border-border">
                <span className="text-6xl font-bold text-foreground">
                  <NumberTicker value={5.0} decimalPlaces={1} delay={0.3} />
                </span>
                <div className="flex justify-center gap-1 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on <span className="font-semibold text-foreground">1,929</span> reviews
                </p>
              </div>

              <div className="p-6 space-y-3">
                {ratingBreakdown.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 w-12">
                      <span className="font-medium">{rating.stars}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <Progress value={rating.percentage} className="flex-1 h-2.5" />
                    <span className="w-14 text-muted-foreground text-right font-medium">
                      {rating.count >= 1000 ? `${(rating.count / 1000).toFixed(1)}K` : rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button className="w-full h-12 rounded-xl bg-transparent" variant="outline">
            <Camera className="w-5 h-5 mr-2" />
            Write a Review
          </Button>
        </div>

        {/* Reviews List */}
        <div className="flex-1">
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {["All", "With Photos", "5 Star", "4 Star", "Most Helpful"].map((tab) => (
              <Button
                key={tab}
                variant={filter === tab.toLowerCase().replace(" ", "-") ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tab.toLowerCase().replace(" ", "-"))}
                className={cn(
                  "whitespace-nowrap rounded-full px-5",
                  filter === tab.toLowerCase().replace(" ", "-") && "shadow-md",
                )}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {displayedReviews.map((review, index) => (
              <Card
                key={review.id}
                className={cn(
                  "border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20",
                  "animate-fade-in-up",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-semibold text-foreground">{review.name}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-[10px] h-5 gap-1">
                            <Verified className="w-3 h-3 text-accent" />
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-4 h-4",
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted",
                              )}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{review.title}</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">{review.content}</p>

                      {/* Review Images */}
                      {review.images.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {review.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative w-20 h-20 rounded-xl overflow-hidden group cursor-pointer"
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Review image ${imgIndex + 1}`}
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                            </div>
                          ))}
                        </div>
                      )}

                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground -ml-2">
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Helpful ({review.helpful})
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More */}
          <Button
            variant="outline"
            className="w-full mt-8 h-12 rounded-xl hover:bg-muted bg-transparent"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All 1.9K Reviews"}
            <ChevronDown className={cn("w-4 h-4 ml-2 transition-transform", showAll && "rotate-180")} />
          </Button>
        </div>
      </div>
    </section>
  )
}
