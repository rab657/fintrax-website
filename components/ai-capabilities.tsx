import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function AICapabilities() {
  const stats = [
    {
      value: "93%",
      label: "False positive reduction",
      description: "Stop wasting time & resources with the high-precision false positive suppression capabilities.",
    },
    {
      value: "80%",
      label: "Cost savings",
      description: "Scale AML operations without scaling headcount with industry-leading ROI.",
    },
    {
      value: "27%",
      label: "Reduction in operational errors",
      description: "Put AI to work to minimize human errors and drive operational integrity.",
    },
  ]

  return (
    <section className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AIF®: Flagright's AI Agents</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Supercharge AML operations with advanced AI agents
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AIF® arms fincrime fighters with superpowers for screening, monitoring, governance, and quality assurance
            use cases.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 bg-card border-border text-center">
              <div className="mb-4 text-5xl font-bold text-primary">{stat.value}</div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{stat.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Explore AI Forensics
          </Button>
        </div>
      </div>
    </section>
  )
}
