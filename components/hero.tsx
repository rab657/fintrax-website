"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Play, Sparkles, Zap, Shield, CheckCircle, FileText, Users, BarChart3 } from "lucide-react"
import { useState } from "react"
import { WaitlistDialog } from "./waitlist-dialog"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border/40 bg-background">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Floating Graphics */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary/20 rounded-full blur-md animate-pulse delay-2000" />
      <div className="absolute top-60 right-1/3 w-8 h-8 bg-accent/20 rounded-full blur-sm animate-pulse delay-500" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
              <Award className="h-4 w-4 text-primary" />
              AI-Powered Proof of Wealth Automation
            </Badge>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            The fastest way to perform proof of wealth checks
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-balance max-w-3xl mx-auto leading-relaxed">
            Automate KYC and proof of source checks for UK property transactions. Upload customer files and let AI handle the rest.
          </p>

          

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <WaitlistDialog>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </WaitlistDialog>
            <Button size="lg" variant="outline" onClick={handlePlayClick}>
              Watch Video
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">AI Document Analysis</p>
                <p className="text-xs text-muted-foreground">Instant processing</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Automated Communication</p>
                <p className="text-xs text-muted-foreground">Smart outreach</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Compliance Reports</p>
                <p className="text-xs text-muted-foreground">Auto-generated</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-10">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl">
            {isVideoPlaying ? (
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src="/demo-video.mp4"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <img src="/financial-compliance-dashboard-interface.jpg" alt="Product demo video" className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="h-20 w-20 rounded-full bg-primary hover:bg-primary/90 shadow-xl hover:scale-110 transition-transform"
                    onClick={handlePlayClick}
                  >
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </Button>
                </div>
              </>
            )}

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm text-foreground">
              <span className="font-medium">Product Demo</span>
              <span className="text-muted-foreground">3:45</span>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  )
}
