import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 gap-2 px-4 py-2 text-sm">
            <Award className="h-4 w-4 text-primary" />
            Awarded #1 AML compliance solution
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            The modern standard for financial crime compliance
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-balance max-w-3xl mx-auto leading-relaxed">
            AI-native transaction monitoring and AML compliance solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Get a demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch video
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
