import { Truck, RefreshCw, Shield, Award, CreditCard } from "lucide-react"

const badges = [
  { icon: Truck, label: "Free Shipping", desc: "On orders ₹999+" },
  { icon: RefreshCw, label: "Easy Returns", desc: "7-day policy" },
  { icon: Shield, label: "Secure Payment", desc: "100% protected" },
  { icon: Award, label: "Quality Assured", desc: "Premium fabrics" },
]

const paymentMethods = [
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "UPI", icon: "📱" },
  { name: "GPay", icon: "🔷" },
  { name: "PhonePe", icon: "💜" },
  { name: "Paytm", icon: "🔵" },
  { name: "COD", icon: "💵" },
]

export function TrustBadges() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{badge.label}</p>
              <p className="text-xs text-muted-foreground">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/30 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-4 h-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Secure Checkout With</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 hover:border-primary/30 transition-colors"
            >
              <span>{method.icon}</span>
              {method.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
