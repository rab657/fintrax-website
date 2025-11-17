export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-lg font-bold text-foreground">Fintrax AI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Fintrax AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
