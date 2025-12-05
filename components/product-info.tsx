"use client"

import { useState } from "react"
import {
  Heart,
  ChevronDown,
  ChevronRight,
  Check,
  Truck,
  RefreshCw,
  MapPin,
  Package,
  Ruler,
  Sparkles,
  Shield,
  Clock,
  Phone,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sizes = ["32", "34", "36", "38"]

const sizeChartData = [
  { brand: "28", waist: "28", hip: "35", inseam: "31.5", length: "42" },
  { brand: "30", waist: "30", hip: "37", inseam: "31", length: "42" },
  { brand: "32", waist: "32", hip: "39", inseam: "30.5", length: "42" },
  { brand: "34", waist: "34", hip: "41", inseam: "30.2", length: "42" },
  { brand: "36", waist: "36", hip: "43", inseam: "30.2", length: "42" },
  { brand: "38", waist: "38", hip: "45", inseam: "30", length: "42" },
  { brand: "40", waist: "40", hip: "47", inseam: "30", length: "42" },
  { brand: "42", waist: "42", hip: "49", inseam: "29", length: "42" },
  { brand: "44", waist: "44", hip: "51", inseam: "29", length: "42" },
]

const keyFeatures = [
  "Polo Fit Design for Modern Style",
  "Poly Cotton Express Mattee Blend for All Day Comfort",
  "Wrinkle free & Express Mattee Finish",
  "Cross Pocket with Watch Pocket Inside",
  "Hook Closure with Zip Fly",
  "Perfect for Office, Meetings & Evening Events",
]

const descriptionFeatures = [
  {
    title: "Wrinkle-Resistant Fabric",
    desc: "Prevents the need for regular ironing by maintaining a clean, glossy appearance.",
  },
  {
    title: "Superior Comfort",
    desc: "Made from a premium, breathable lycra stretchable for comfortable wear all day.",
  },
  {
    title: "Classic Fit",
    desc: "Provides a classic silhouette with a slightly tapered leg, guaranteeing a polished and attractive look.",
  },
  {
    title: "Practical Design",
    desc: "For added convenience, it has spacious side pockets, a secure zip closing, and belt loops.",
  },
  {
    title: "Easy Care",
    desc: "Long-lasting durability and uncomplicated maintenance are ensured by machine washability and fade resistance.",
  },
]

export function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState("38")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const accordionItems = [
    { id: "details", title: "Details", icon: Package },
    { id: "features", title: "Key Features", icon: Sparkles },
    { id: "size", title: "Size Chart", icon: Ruler },
    { id: "shipping", title: "Shipping Policy", icon: Truck },
    { id: "return", title: "Return / Exchange Policy", icon: RefreshCw },
    { id: "vendor", title: "Vendor's Details", icon: MapPin },
    { id: "description", title: "Description", icon: Shield },
  ]

  return (
    <div className="space-y-4">
      {/* Product Title & Wishlist */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-base font-medium text-foreground leading-snug">
          Lycra Cotton Stretchable | Plain Formal Trousers | Polo Fit | Office Wear For Men&apos;S | Charcoal Black
        </h1>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="flex-shrink-0 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <Heart
            className={cn(
              "w-5 h-5 transition-all",
              isWishlisted ? "fill-red-500 text-red-500 scale-110" : "text-muted-foreground",
            )}
          />
        </button>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-semibold text-foreground">₹1,349</span>
        <span className="text-sm text-muted-foreground line-through">₹2,699</span>
        <span className="text-sm text-muted-foreground">50% OFF</span>
      </div>

      <p className="text-xs text-muted-foreground">SKU-0015</p>

      {/* Size Selector */}
      <div>
        <p className="text-sm text-foreground mb-2">
          SIZE: <span className="font-medium">{selectedSize}</span>
        </p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => size !== "32" && setSelectedSize(size)}
              className={cn(
                "w-10 h-10 text-sm border rounded transition-all",
                selectedSize === size
                  ? "border-foreground bg-foreground text-background"
                  : size === "32"
                    ? "border-muted text-muted-foreground/40 line-through cursor-not-allowed"
                    : "border-border text-foreground hover:border-foreground",
              )}
              disabled={size === "32"}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div>
        <p className="text-sm text-foreground mb-2">
          COLOR: <span className="font-medium">CHARCOAL BLACK</span>
        </p>
        <button className="px-3 py-1.5 text-xs border border-foreground text-foreground rounded">CHARCOAL BLACK</button>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm text-foreground mb-2">QUANTITY</p>
        <div className="flex items-center border border-border rounded w-fit">
          <span className="px-4 py-2 text-sm">{quantity}</span>
          <button className="px-2 py-2 border-l border-border hover:bg-muted transition-colors">
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <p className="text-orange-500 font-medium text-sm">Sold Out</p>

      <div className="border-t border-border pt-4 space-y-1">
        {accordionItems.map((item) => {
          const Icon = item.icon
          const isOpen = openAccordion === item.id

          return (
            <div
              key={item.id}
              className={cn(
                "border border-border rounded-lg overflow-hidden transition-all duration-300",
                isOpen
                  ? "bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20 shadow-sm"
                  : "bg-background hover:bg-muted/50",
              )}
            >
              <button
                onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between p-3 text-left group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "p-1.5 rounded-md transition-all",
                      isOpen
                        ? "bg-amber-500/20 text-amber-600"
                        : "bg-muted text-muted-foreground group-hover:bg-amber-500/10 group-hover:text-amber-600",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isOpen ? "text-amber-700 dark:text-amber-500" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-90 text-amber-600",
                  )}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="px-4 pb-4 pt-1">
                  {/* Details Content */}
                  {item.id === "details" && (
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">Perfume Product</span>
                    </div>
                  )}

                  {/* Key Features Content */}
                  {item.id === "features" && (
                    <div className="space-y-2">
                      {keyFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-background transition-colors group"
                        >
                          <div className="mt-0.5 p-1 rounded-full bg-emerald-500/20 text-emerald-600 flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Size Chart Content */}
                  {item.id === "size" && (
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">Note:</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400">
                          Our products are mostly free size. For example, M to XXL fits bust sizes 38 to 44 inches.
                        </p>
                      </div>

                      <div className="overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
                              <th className="px-3 py-2 text-left font-semibold text-foreground border-b border-border">
                                Brand Size
                              </th>
                              <th className="px-3 py-2 text-center font-semibold text-foreground border-b border-border">
                                Waist (in)
                              </th>
                              <th className="px-3 py-2 text-center font-semibold text-foreground border-b border-border">
                                Hip (in)
                              </th>
                              <th className="px-3 py-2 text-center font-semibold text-foreground border-b border-border">
                                Inseam (in)
                              </th>
                              <th className="px-3 py-2 text-center font-semibold text-foreground border-b border-border">
                                Length (in)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {sizeChartData.map((row, idx) => (
                              <tr
                                key={idx}
                                className={cn(
                                  "transition-colors hover:bg-amber-50 dark:hover:bg-amber-950/20",
                                  idx % 2 === 0 ? "bg-background" : "bg-muted/30",
                                )}
                              >
                                <td className="px-3 py-2 font-medium text-foreground border-b border-border">
                                  {row.brand}
                                </td>
                                <td className="px-3 py-2 text-center text-muted-foreground border-b border-border">
                                  {row.waist}
                                </td>
                                <td className="px-3 py-2 text-center text-muted-foreground border-b border-border">
                                  {row.hip}
                                </td>
                                <td className="px-3 py-2 text-center text-muted-foreground border-b border-border">
                                  {row.inseam}
                                </td>
                                <td className="px-3 py-2 text-center text-muted-foreground border-b border-border">
                                  {row.length}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="space-y-3 p-3 bg-background rounded-lg border border-border">
                        <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                          <Ruler className="w-4 h-4 text-amber-600" />
                          How To Measure
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-medium text-foreground">BUST:</span>{" "}
                            <span className="text-muted-foreground">Measure around the fullest part of your bust.</span>
                          </p>
                          <p>
                            <span className="font-medium text-foreground">WAIST:</span>{" "}
                            <span className="text-muted-foreground">Measure your natural waistline.</span>
                          </p>
                          <p>
                            <span className="font-medium text-foreground">HIPS:</span>{" "}
                            <span className="text-muted-foreground">Measure the widest part of your hips.</span>
                          </p>
                          <p>
                            <span className="font-medium text-foreground">INSIDE LEG:</span>{" "}
                            <span className="text-muted-foreground">
                              Measure from the top of your inner thigh to your ankle.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Shipping Policy Content */}
                  {item.id === "shipping" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-900">
                        <div className="p-2 bg-emerald-500/20 rounded-full">
                          <Truck className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-emerald-800 dark:text-emerald-300 text-sm">Free Shipping</p>
                          <p className="text-xs text-emerald-700 dark:text-emerald-400">Across India</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                        <div className="p-2 bg-blue-500/20 rounded-full">
                          <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Delivery Time</p>
                          <p className="text-xs text-muted-foreground">7-10 Days</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                        <div className="p-2 bg-orange-500/20 rounded-full">
                          <Phone className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Urgent Orders</p>
                          <p className="text-xs text-muted-foreground">
                            Contact us at <span className="text-amber-600 font-medium">+91 7744844867</span>
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-900">
                        <p className="text-sm text-amber-800 dark:text-amber-300">
                          <span className="font-medium">COD:</span> COD charges applicable.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Return/Exchange Policy Content */}
                  {item.id === "return" && (
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-900">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-full flex-shrink-0">
                          <RefreshCw className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-purple-800 dark:text-purple-300 text-sm mb-1">
                            Easy Returns & Exchange
                          </p>
                          <p className="text-sm text-purple-700 dark:text-purple-400">
                            Returns or exchanges are permitted within{" "}
                            <span className="font-semibold">7 (seven) calendar days</span> from the date of delivery.
                            div&gt;
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Vendor Details Content */}
                  {item.id === "vendor" && (
                    <div className="p-4 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/50 dark:to-gray-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            D
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Packer Name</p>
                            <p className="font-semibold text-foreground">DMD Clothing</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <span className="text-muted-foreground">
                            Address: <span className="text-foreground font-medium">INDIA</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Description Content */}
                  {item.id === "description" && (
                    <div className="space-y-4">
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <h3 className="font-bold text-foreground mb-3">
                          DMD CLOTHING – Men&apos;s Wrinkle-Free Lycra Polo Fit Formal Trousers
                        </h3>
                        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                          <p>
                            DMD CLOTHING offers the best formal pants made of high-quality fabric. Our Men&apos;s
                            Wrinkle-Free Lycra Polo Fit Formal trousers will add style and comfort to your wardrobe
                            while keeping you looking put together all day.
                          </p>
                          <p>
                            These trousers provide the ideal mix of fashion, functionality, and comfort whether
                            you&apos;re going to the office, attending a meeting, or spending a laid-back evening out.
                          </p>
                          <p>
                            The fabric&apos;s anti-wrinkle properties will make them simple to maintain. For that
                            polished boardroom appearance, you might wear them with a blazer and a formal shirt. For
                            your informal out-of-office events, you could wear them with sneakers and a casual shirt or
                            polo.
                          </p>
                          <p>
                            For a style that is effortlessly sophisticated, pair these pants with a fitted shirt and
                            high-end shoes. These trousers are a wardrobe staple for the contemporary guy, whether they
                            are in navy for subtle sophistication or black for classic elegance.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {descriptionFeatures.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg border border-emerald-100 dark:border-emerald-900/50 hover:shadow-sm transition-all"
                          >
                            <div className="mt-0.5 p-1 rounded-full bg-emerald-500 text-white flex-shrink-0">
                              <Check className="w-3 h-3" />
                            </div>
                            <div>
                              <span className="font-medium text-foreground text-sm">{feature.title}:</span>
                              <span className="text-muted-foreground text-sm ml-1">{feature.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
