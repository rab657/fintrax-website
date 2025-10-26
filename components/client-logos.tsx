export function ClientLogos() {
  const logos = ["Mitchell & Associates", "Thompson Legal", "Richardson & Co", "UK Property Law", "Conveyancing Partners", "Legal Solutions"]

  return (
    <section className="border-b border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by leading UK law firms and conveyancing solicitors
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-12 w-32 items-center justify-center rounded-lg bg-card px-4 text-sm font-semibold text-muted-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
