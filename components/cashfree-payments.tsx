"use client"

import Image from "next/image"

export function CashfreePayments() {
  return (
    <div className="space-y-4">
      <Image
        src="/cashfree-payments.png"
        alt="Cashfree Payments - Secured Payment Gateway with UPI, Google Pay, Paytm, Visa, Mastercard, RuPay, American Express, Amazon Pay, Mobikwik, Airtel Bank, PayPal, Diners Club, ICICI Bank"
        width={1200}
        height={200}
        className="w-full h-auto rounded-lg"
        unoptimized
      />
    </div>
  )
}
