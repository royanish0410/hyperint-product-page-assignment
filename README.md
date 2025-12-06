# DMD Clothing - Premium Formal Trousers Product Page

A modern, feature-rich e-commerce product page built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, showcasing premium Lycra Cotton formal trousers.

## 🚀 Features

### Product Showcase
- **Interactive Product Gallery** - Multi-image viewer with zoom functionality and feature callouts
- **Size Chart** - Detailed measurements and fit guide
- **Product Information** - Comprehensive accordion sections with shipping, returns, and vendor details

### Social Proof & Trust
- **Live Viewer Counter** - Real-time display of active viewers and recent purchases
- **Recent Purchase Notifications** - Toast-style popup showing recent customer orders
- **Reviews & Ratings** - Full 5.0-star rating with 1,929+ customer reviews
- **Design Variations** - Multiple social proof layouts (Minimal, Bold, Premium, Social-First, Urgency)

### E-Commerce Features
- **Dynamic Pricing** - 50% OFF discount display with original price
- **Size & Color Selection** - Interactive selectors for available options
- **Wishlist Integration** - Heart icon to save products
- **Related Products** - "You May Also Like" section with quick-add functionality
- **Trust Badges** - Security, shipping, returns, and quality assurance badges

### Design & UX
- **Responsive Layout** - Mobile-first design with grid optimization
- **Smooth Animations** - Slide-in, fade-in, and floating animations
- **Dark Mode Support** - Full light/dark theme with OKLch color system
- **Marquee Scrolling** - Brand carousel and promotional scrolling text
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles with animations & color system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main product page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── product-gallery.tsx  # Image viewer with feature callouts
│   ├── product-info.tsx     # Price, size, accordion sections
│   ├── reviews-section.tsx  # Customer reviews & ratings
│   ├── social-proof-widget.tsx  # Statistics & trust indicators
│   ├── recent-purchase-popup.tsx # Purchase notifications
│   ├── design-variations.tsx # Social proof layout options
│   ├── footer.tsx           # Footer with links & payment methods
│   ├── header.tsx           # Navigation & promo slider
│   └── [other components]
├── lib/
│   └── utils.ts             # Utility functions (cn)
├── package.json             # Dependencies
└── tailwind.config.ts       # Tailwind configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7
- **Runtime**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.9 with PostCSS
- **UI Components**: shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Forms**: React Hook Form
- **Utilities**: clsx, tailwind-merge

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## 🎨 Design System

The project uses OKLch color system with CSS variables defined in 

globals.css

:
- **Primary**: Blue (260°)
- **Accent**: Green (150°)
- **Destructive**: Red (27.325°)
- **Chart Colors**: 5-color palette for data visualization
- **Radius**: 0.625rem base with sm/md/lg/xl variants

## 📱 Key Components

| Component | Purpose |
|-----------|---------|
| 

ProductGallery

 | Multi-image viewer with zoom & feature annotations |
| 

ProductInfo

 | Pricing, sizing, specifications & policies |
| 

ReviewsSection

 | Customer reviews with 5-star rating system |
| 

SocialProofWidget

 | Statistics: 4.8★, 15K+ customers, 25K+ units sold |
| 

DesignVariations

 | 5 different social proof layout options |
| 

RecentPurchasePopup

 | Toast notifications for recent orders |
| 

Footer

 | Links, payment methods & company info |

## 🎯 Performance Optimizations

- Image optimization with Next.js 

Image

 component
- CSS animations and transitions for smooth UX
- Lazy loading of components
- Optimized bundle with tree-shaking
- Remote image support configured for 

image.cdn.shpy.in



## 📋 Features Showcase

✅ 50% discount display  
✅ Live viewer counter (47 people viewing)  
✅ Recent purchase notifications  
✅ Comprehensive size chart  
✅ 7-day return policy  
✅ Free shipping info  
✅ Cash on Delivery available  
✅ 1,929 verified customer reviews  
✅ Multiple payment methods (UPI, Visa, MasterCard, etc.)  
✅ Responsive design for all devices  

## 📝 License

This project was bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).