import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductVideo() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-24 md:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            See Fintrax AI in action
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Watch how solicitors use Fintrax AI to automate proof of wealth checks and streamline UK property transactions
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl">
            <img src="/financial-compliance-dashboard-interface.jpg" alt="Product demo video" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="h-20 w-20 rounded-full bg-primary hover:bg-primary/90 shadow-xl hover:scale-110 transition-transform"
              >
                <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
              </Button>
            </div>

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
