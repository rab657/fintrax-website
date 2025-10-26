import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, FileText, Shield, MessageSquare, BarChart3, Sparkles, Zap, Upload, Search, DollarSign, Download } from "lucide-react"
import { WaitlistDialog } from "./waitlist-dialog"

export function Solutions() {
  const steps = [
    {
      step: "STEP ONE",
      title: "Upload Documents",
      description: "Super Fast!",
      icon: Upload,
      color: "blue",
      details: "Upload customer files and bank statements in seconds. Our AI instantly recognizes and processes all document types.",
    },
    {
      step: "STEP TWO", 
      title: "AI Analysis",
      description: "Smart Processing!",
      icon: Search,
      color: "green",
      details: "AI automatically analyzes documents, identifies inflows, and matches supporting evidence with transaction entries.",
    },
    {
      step: "STEP THREE",
      title: "Automated Verification",
      description: "Effortless!",
      icon: Shield,
      color: "purple",
      details: "AI handles customer communication, requests missing documents, and verifies all information automatically.",
    },
    {
      step: "STEP FOUR",
      title: "Generate Reports",
      description: "Complete!",
      icon: Download,
      color: "orange",
      details: "Get comprehensive proof of wealth reports with full compliance documentation and audit trails.",
    },
  ]

  return (
    <section id="solutions" className="border-b border-border/40 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-xs font-medium text-foreground uppercase tracking-wider">HOW IT WORKS</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Start in four steps and automate proof of wealth checks
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From document upload to compliance reporting—everything automated for UK property transactions.
          </p>
        </div>

        {/* Clean Step-by-Step Process */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="relative group flex flex-col">
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Card */}
                  <Card className="p-8 bg-white border border-border/50 hover:border-border transition-all duration-300 group-hover:shadow-lg flex-1 flex flex-col">
                    <div className="text-center flex flex-col h-full">
                      {/* Icon */}
                      <div className="mx-auto mb-6 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-foreground" />
                      </div>
                      
                      {/* Step Label */}
                      <div className="mb-3">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {step.step}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="mb-3 text-xl font-semibold text-black">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm font-medium text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {step.details}
                      </p>
                    </div>
                  </Card>
                  
                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <WaitlistDialog>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Waitlist
            </Button>
          </WaitlistDialog>
        </div>
      </div>
    </section>
  )
}
