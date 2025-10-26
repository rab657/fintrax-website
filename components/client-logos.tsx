export function ClientLogos() {
  const logos = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"]

  return (
    <section className="border-b border-border/40 bg-muted/30 py-12">
      <div className="container">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by regulated financial institutions globally
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
