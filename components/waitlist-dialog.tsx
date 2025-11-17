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
  const [emailError, setEmailError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
  })

  const validateWorkEmail = (email: string): boolean => {
    if (!email) return false
    const personalEmailDomains = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'icloud.com',
      'aol.com',
      'mail.com',
      'protonmail.com',
      'yandex.com',
      'zoho.com'
    ]
    const domain = email.split('@')[1]?.toLowerCase()
    return domain ? !personalEmailDomains.includes(domain) : false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate work email
    if (!validateWorkEmail(formData.email)) {
      setEmailError('Please use your work email address. Personal email addresses are not accepted.')
      return
    }

    setEmailError("")
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
      setFormData({ name: "", email: "", phone: "", company_name: "" })
      setEmailError("")
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear email error when user starts typing
    if (name === "email" && emailError) {
      setEmailError("")
    }
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
                  <Label htmlFor="email" className="text-sm font-medium">
                    Work Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-11 ${emailError ? "border-destructive" : ""}`}
                  />
                  {emailError ? (
                    <p className="text-xs text-destructive">{emailError}</p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Please use your work email address. Personal emails are not accepted.
                    </p>
                  )}
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

                <div className="space-y-2">
                  <Label htmlFor="company_name" className="text-sm font-medium">
                    Company Name *
                  </Label>
                  <Input
                    id="company_name"
                    name="company_name"
                    placeholder="Acme Solicitors"
                    required
                    value={formData.company_name}
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
