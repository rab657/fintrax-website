"use client"

import { useEffect } from "react"
import { CheckCircle, Calendar, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Google Ads tracking - Commented out until keys are available
// declare global {
//   interface Window {
//     gtag?: (...args: any[]) => void
//   }
// }

export default function WaitlistSuccessPage() {
  useEffect(() => {
    // TODO: Uncomment when Google Ads keys are available from marketing team
    // Google Ads - Track conversion
    // if (typeof window !== 'undefined' && window.gtag) {
    //   const conversionId = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID
    //   const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL
    //   
    //   if (conversionId && conversionLabel) {
    //     window.gtag('event', 'conversion', {
    //       'send_to': `${conversionId}/${conversionLabel}`,
    //       'value': 1.0,
    //       'currency': 'GBP'
    //     })
    //   }
    // }
  }, [])

  const steps = [
    
    {
      number: 1,
      title: "Early Access Invitation",
      description: "We'll send you an exclusive early access invitation as we roll out features. Keep an eye on your inbox!",
      icon: Calendar,
    },
    {
      number: 2,
      title: "Product Updates",
      description: "Stay informed with regular updates about new features, case studies, and industry insights.",
      icon: Sparkles,
    },
    {
      number: 3,
      title: "Launch Notification",
      description: "Be the first to know when Fintrax AI officially launches and get priority onboarding support.",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Graphics */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              You're on the Waitlist! 🎉
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thank you for joining Fintrax AI. We're excited to have you on board and can't wait to show you what we've built.
            </p>
          </div>

          {/* Steps Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              What Happens Next?
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Here's what you can expect as a waitlist member:
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.number}
                    className="flex gap-6 items-start animate-in fade-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-primary">
                          Step {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Want to Learn More?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Explore our features and see how Fintrax AI can transform your proof of wealth automation process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/">
                    Explore Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                >
                  <Link href="/#solutions">
                    How It Works
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Questions? Reach out to us at{" "}
              <a
                href="mailto:support@fintra.ai"
                className="text-primary hover:underline"
              >
                support@fintra.ai
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

