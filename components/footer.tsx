"use client"

import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const footerLinks = {
  shop: [
    { label: "All Trousers", href: "#" },
    { label: "Formal", href: "#" },
  ],
  help: [
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Terms & Condition", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const paymentMethods = [
  { name: "UPI", icon: "💳" },
  { name: "Visa", icon: "visa" },
  { name: "MasterCard", icon: "mc" },
  { name: "RuPay", icon: "rupay" },
  { name: "Wallets", icon: "wallet" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section - About */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="flex items-start gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 border-2 border-white px-4 py-2">
              <div className="text-2xl font-bold tracking-wider">DMD</div>
              <div className="text-[10px] tracking-[0.2em] text-center">CLOTHING</div>
            </div>

            {/* About Text */}
            <div className="max-w-lg">
              <h3 className="text-lg font-semibold mb-2">About DMD Clothing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium trousers, consciously crafted in small batches using natural fabrics and meticulous finishing.
                Slow-fashion ethics, timeless silhouettes, and everyday comfort—made in India for people and the planet.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-[#c45c3e] hover:bg-[#b04d31] text-white font-medium px-6 py-2 rounded-md transition-all hover:scale-105">
            Shop Trousers
          </Button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-white/10">
          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#7d9cb8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4">HELP</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#7d9cb8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4">ABOUT</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#7d9cb8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide mb-4">CONTACT</h4>
            <div className="space-y-3">
              {/* Phone */}
              <a
                href="tel:+917744844867"
                className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] rounded-md px-3 py-2 transition-colors group"
              >
                <Phone className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-300 group-hover:text-white">+91-7744844867</span>
              </a>

              {/* Email */}
              <a
                href="mailto:dmdcc.onlinestore@gmail.com"
                className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] rounded-md px-3 py-2 transition-colors group"
              >
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-300 group-hover:text-white">dmdcc.onlinestore@gmail.com</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-2 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#1a1a1a] transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 DMD Clothing — Made <span className="text-[#7d9cb8]">consciously</span> in India.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            {/* UPI */}
            <div className="bg-[#2a2a2a] rounded px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-xs text-gray-300">≡</span>
              <span className="text-xs text-gray-300">UPI</span>
            </div>

            {/* Visa */}
            <div className="bg-[#2a2a2a] rounded px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-blue-400 italic">VISA</span>
              <span className="text-xs text-gray-300">Visa</span>
            </div>

            {/* MasterCard */}
            <div className="bg-[#2a2a2a] rounded px-3 py-1.5 flex items-center gap-1.5">
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
              </div>
              <span className="text-xs text-gray-300">MasterCard</span>
            </div>

            {/* RuPay */}
            <div className="bg-[#2a2a2a] rounded px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-green-400">RuPay</span>
              <span className="text-xs text-gray-300">RuPay</span>
            </div>

            {/* Wallets */}
            <div className="bg-[#2a2a2a] rounded px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-xs">💳</span>
              <span className="text-xs text-gray-300">Wallets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
