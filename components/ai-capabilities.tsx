import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { WaitlistDialog } from "./waitlist-dialog"

export function AICapabilities() {
  const stats = [
    {
      value: "90%",
      label: "Time reduction",
      description: "Cut proof of wealth check processing time from days to hours with automated AI analysis.",
    },
    {
      value: "95%",
      label: "Accuracy improvement",
      description: "Eliminate manual errors with AI-powered document matching and transaction verification.",
    },
    {
      value: "85%",
      label: "Customer satisfaction",
      description: "Reduce back-and-forth communication with automated customer outreach and clear requests.",
    },
  ]

  return (
    <section id="capabilities" className="border-b border-border/40 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-xs font-medium text-foreground uppercase tracking-wider">AI CAPABILITIES</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Transform manual proof of wealth checks with AI automation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Fintrax AI automates the entire proof of wealth process, from document analysis to customer communication, saving solicitors hours of manual work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {stats.map((stat, index) => {
            return (
              <Card key={index} className="p-8 bg-white border border-border/50 hover:border-border transition-all duration-300 group-hover:shadow-lg text-center">
                <div className="flex flex-col items-center">
                  {/* Number */}
                  <div className="mb-6 text-6xl font-semibold text-black">
                    {stat.value}
                  </div>
                  
                  {/* Icon */}
                  <div className="mx-auto mb-6 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-foreground" />
                  </div>
                  
                  {/* Label */}
                  <h3 className="mb-3 text-xl font-semibold text-black">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Card>
            );
          })}
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
