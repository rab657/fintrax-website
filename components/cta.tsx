"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WaitlistDialog } from "./waitlist-dialog"

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Ready to automate your proof of wealth checks?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">See how Fintrax AI can transform your UK property transaction process</p>
          <WaitlistDialog>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </Button>
          </WaitlistDialog>
        </div>
      </div>
    </section>
  )
}
