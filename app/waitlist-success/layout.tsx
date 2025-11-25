import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Waitlist Success - Fintrax AI",
  description: "You've successfully joined the Fintrax AI waitlist. Get early access to automated proof of wealth and KYC compliance for UK property transactions.",
  robots: {
    index: false, // Don't index the success page
    follow: false,
  },
}

export default function WaitlistSuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

