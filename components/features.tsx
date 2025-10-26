import { Card } from "@/components/ui/card"
import { Sparkles, Settings, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-native platform",
      description:
        "Get state-of-the-art AI built into your AML solutions from day one. Automate risk detection and stay ahead of threats.",
      image: "/ai-machine-learning-neural-network-visualization.jpg",
    },
    {
      icon: Settings,
      title: "No-code configurability",
      description:
        "Give your team the freedom to easily configure a holistic fincrime compliance program without technical expertise.",
      image: "/no-code-configuration-interface-dashboard.jpg",
    },
    {
      icon: Database,
      title: "Centralized operations",
      description:
        "Replace fragmented tools with a unified platform to streamline operations and effectively reduce risks.",
      image: "/centralized-data-operations-dashboard.jpg",
    },
  ]

  return (
    <section className="border-b border-border/40 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Flagright makes
          </h2>
          <p className="text-2xl font-bold text-foreground md:text-3xl text-balance">
            Small teams feel big. Big teams feel invincible.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From daily operations to running industry-leading AML programs, Flagright redefines how fincrime compliance
            teams work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
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
