import { Header } from "@/components/header"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { SocialProofWidget } from "@/components/social-proof-widget"
import { ReviewsSection } from "@/components/reviews-section"
import { RecentPurchasePopup } from "@/components/recent-purchase-popup"
import { DesignVariations } from "@/components/design-variations"
import { RelatedProducts } from "@/components/related-products"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
          <a href="#" className="hover:text-foreground transition-colors">
            Home
          </a>
          <span className="text-border">/</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Men&apos;s Clothing
          </a>
          <span className="text-border">/</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Formal Trousers
          </a>
          <span className="text-border">/</span>
          <span className="text-foreground font-medium">Charcoal Black Trousers</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Social Proof Section */}
        <SocialProofWidget />

        {/* Reviews Section */}
        <ReviewsSection />

        <RelatedProducts />

        {/* Design Variations Showcase */}
        <DesignVariations />
      </main>

      <Footer />

      {/* Recent Purchase Popup */}
      <RecentPurchasePopup />
    </div>
  )
}
