import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Today, Flagright's real-time transaction monitoring serves as the backbone of our compliance strategy. Week by week, we have expanded the suite of features we use, especially on the AI front. We've seen returns on investment from day one.",
      author: "Angela Cavendish",
      role: "Fraud and Financial Crime Manager",
    },
    {
      quote:
        "There's nothing that builds my confidence more than seeing our team focus on real investigations. With Flagright in the picture, these guys move at rocket speed, and that's how we've stayed a step ahead.",
      author: "Saqib Mirza",
      role: "CEO & Co-founder",
    },
    {
      quote:
        "From transaction monitoring to quality assurance, we have trusted AI forensics to revolutionize the way we approach compliance today.",
      author: "Dustin Eaton",
      role: "Head of Risk and Compliance",
    },
  ]

  return (
    <section className="border-b border-border/40 bg-muted/30 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Client Success Stories</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            The first choice of fincrime fighters
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
