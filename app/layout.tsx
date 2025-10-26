import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fintra.ai'),
  title: "Fintrax AI - Automated Proof of Wealth & KYC for UK Property Transactions",
  description:
    "Automate proof of wealth checks and KYC compliance for UK property transactions. AI-powered document analysis, automated customer communication, and compliance reporting. Reduce processing time by 90%.",
  keywords: [
    "proof of wealth",
    "KYC compliance",
    "UK property transactions",
    "AI automation",
    "conveyancing solicitors",
    "anti-money laundering",
    "AML compliance",
    "document verification",
    "customer due diligence",
    "property law",
    "UK solicitors",
    "AI document analysis"
  ],
  authors: [{ name: "Fintrax AI" }],
  creator: "Fintrax AI",
  publisher: "Fintrax AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://fintra.ai",
    title: "Fintrax AI - Automated Proof of Wealth & KYC for UK Property Transactions",
    description: "Automate proof of wealth checks and KYC compliance for UK property transactions. AI-powered document analysis reduces processing time by 90%.",
    siteName: "Fintrax AI",
    images: [
      {
        url: "/financial-compliance-dashboard-interface.jpg",
        width: 1200,
        height: 630,
        alt: "Fintrax AI Dashboard - Automated Proof of Wealth Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintrax AI - Automated Proof of Wealth for UK Property",
    description: "Automate proof of wealth checks and KYC compliance for UK property transactions. Reduce processing time by 90%.",
    images: ["/financial-compliance-dashboard-interface.jpg"],
    creator: "@fintraai",
  },
  alternates: {
    canonical: "https://fintra.ai",
  },
  verification: {
    // Add your verification codes here when available
    // google: "verification_token",
    // yandex: "verification_token",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Additional meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Fintrax AI",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/PreOrder"
              },
              "description": "AI-powered proof of wealth automation for UK property transactions. Automates KYC checks, document analysis, and compliance reporting.",
              "provider": {
                "@type": "Organization",
                "name": "Fintrax AI",
                "url": "https://fintra.ai"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "ratingCount": "24"
              },
              "features": [
                "AI Document Analysis",
                "Automated KYC Compliance",
                "Proof of Wealth Checks",
                "Automated Customer Communication",
                "Compliance Reporting",
                "90% Time Reduction"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fintrax AI",
              "url": "https://fintra.ai",
              "logo": "https://fintra.ai/logo.png",
              "description": "AI-powered proof of wealth automation for UK property transactions",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                // Add social media links when available
                // "https://twitter.com/fintraai",
                // "https://linkedin.com/company/fintraxai"
              ]
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
