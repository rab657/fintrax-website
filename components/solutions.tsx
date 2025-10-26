import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Solutions() {
  const solutions = [
    {
      title: "Transaction Monitoring",
      subtitle: "Configure rules in minutes",
      features: ["Custom scenario builder", "Predefined rule library", "Advanced simulator & backtesting"],
      link: "/transaction-monitoring",
    },
    {
      title: "Case Management",
      subtitle: "Take control of investigations & alerts",
      features: ["Centralized investigations", "Collaborative workflows", "AI co-pilot"],
      link: "/case-management",
    },
    {
      title: "Watchlist Screening",
      subtitle: "Reliable, instant global watchlist screening",
      features: ["Frequent data updates", "Centralized case management", "Advanced matching configurability & filters"],
      link: "/watchlist-screening",
    },
    {
      title: "Risk Scoring",
      subtitle: "Enhance compliance with dynamic risk scoring",
      features: ["Automated risk assessment", "Customizable algorithms", "Integrated risk-based monitoring"],
      link: "/risk-scoring",
    },
  ]

  return (
    <section className="border-b border-border/40 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Solutions</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            The most intuitive AML platform
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The top-rated AML compliance platform for usability—see for yourself.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-2xl font-bold text-card-foreground">{solution.title}</h3>
              <p className="mb-6 text-muted-foreground">{solution.subtitle}</p>

              <ul className="mb-6 space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 gap-1">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get a demo
          </Button>
        </div>
      </div>
    </section>
  )
}
