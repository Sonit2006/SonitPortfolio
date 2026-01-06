import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Subtle star background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.05),transparent_50%)]" />

      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Sonit Maddineni</h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-mono">CS & Astronomy @ UIUC</p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Building at the intersection of software, robotics, and the cosmos
          </p>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Button size="lg" variant="default" className="group" asChild>
              <a
                href="https://github.com/Sonit2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                GitHub
              </a>
            </Button>

            <Button size="lg" variant="outline" className="group bg-transparent" asChild>
              <a
                href="https://www.linkedin.com/in/sonit-maddineni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
