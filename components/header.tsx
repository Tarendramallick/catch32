import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">CATCH22</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#work" className="text-foreground hover:text-primary transition-colors font-medium">
            Work
          </a>
          <a href="#insights" className="text-foreground hover:text-primary transition-colors font-medium">
            Insights
          </a>
        </nav>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
          Get in touch
        </Button>
      </div>
    </header>
  )
}
