import { Card } from "@/components/ui/card"
import { Sparkles, Settings, Database, FileText, MessageSquare, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaitlistDialog } from "./waitlist-dialog"

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Document Analysis",
      description:
        "Upload customer files and let our AI automatically analyze bank statements, identify inflows, and match supporting documents with transaction entries.",
      image: "/ai-machine-learning-neural-network-visualization.jpg",
    },
    {
      icon: Settings,
      title: "Automated Customer Communication",
      description:
        "AI automatically identifies missing documents and reaches out to customers with specific requests, eliminating back-and-forth communication delays.",
      image: "/no-code-configuration-interface-dashboard.jpg",
    },
    {
      icon: Database,
      title: "Complete Process Automation",
      description:
        "Transform the entire manual proof of wealth process into an automated workflow, saving solicitors hours of manual document matching and verification.",
      image: "/centralized-data-operations-dashboard.jpg",
    },
  ]

  return (
    <section id="features" className="border-b border-border/40 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Fintrax AI makes
          </h2>
          <p className="text-2xl font-bold text-foreground md:text-3xl text-balance">
            Proof of wealth checks effortless.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From manual document matching to automated AI-powered verification, Fintrax AI transforms how solicitors handle UK property transactions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl group relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Floating Icons */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Feature Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-foreground">AI Powered</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                
                {/* Feature Points */}
                <div className="space-y-2">
                  {feature.title === "AI-Powered Document Analysis" && (
                    <>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Bank statement parsing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Document matching</span>
                      </div>
                    </>
                  )}
                  {feature.title === "Automated Customer Communication" && (
                    <>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span>Smart document requests</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span>Automated follow-ups</span>
                      </div>
                    </>
                  )}
                  {feature.title === "Complete Process Automation" && (
                    <>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span>End-to-end workflow</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span>90% time reduction</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
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
