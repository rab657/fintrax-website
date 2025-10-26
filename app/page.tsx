import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductVideo } from "@/components/product-video"
import { ClientLogos } from "@/components/client-logos"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Solutions } from "@/components/solutions"
import { AICapabilities } from "@/components/ai-capabilities"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductVideo />
        <ClientLogos />
        <Features />
        <Testimonials />
        <Solutions />
        <AICapabilities />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
