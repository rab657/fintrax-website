"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Sparkles, CheckCircle } from "lucide-react"

interface WaitlistDialogProps {
  children: React.ReactNode
}

export function WaitlistDialog({ children }: WaitlistDialogProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle form submission here
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setOpen(false)
      setFormData({ name: "", company: "", phone: "" })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {!isSubmitted ? (
          <>
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 pb-6">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  Join Our Waitlist
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  Be among the first to experience the future of proof of wealth automation. 
                  Get early access and exclusive updates.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Solicitors"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 20 7946 0958"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>
              </div>

              <DialogFooter className="sm:justify-start pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </DialogFooter>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Your information will be kept confidential.
              </p>
            </form>
          </>
        ) : (
          <div className="p-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-2">
              You're on the list!
            </DialogTitle>
            <DialogDescription className="text-base mt-2">
              Thanks for joining! We'll be in touch soon with early access details.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
