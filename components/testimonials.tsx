import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Fintrax AI has revolutionized our proof of wealth process. What used to take us days of back-and-forth with clients now takes hours. The AI automatically identifies missing documents and reaches out to clients directly.",
      author: "Sarah Mitchell",
      role: "Senior Partner, Mitchell & Associates",
    },
    {
      quote:
        "The accuracy of Fintrax AI's document matching is incredible. It catches details that would take our team hours to spot manually. We've reduced our proof of wealth processing time by 90%.",
      author: "James Thompson",
      role: "Conveyancing Solicitor, Thompson Legal",
    },
    {
      quote:
        "Our clients love the streamlined process. Instead of multiple rounds of document requests, Fintrax AI gets everything right the first time. It's transformed how we handle UK property transactions.",
      author: "Emma Richardson",
      role: "Property Law Specialist, Richardson & Co",
    },
  ]

  return (
    <section id="testimonials" className="border-b border-border/40 bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Client Success Stories</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Trusted by leading UK law firms
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="mb-6 text-card-foreground leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
