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
    <div className="min-h-screen bg-background relative">
      {/* Global Background Graphics */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>
      
      <Header />
      <main className="">
        <Hero />
        {/* <ProductVideo /> */}
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
