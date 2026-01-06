import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/40">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
              <a href="https://github.com/Sonit2006" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
              <a
                href="https://www.linkedin.com/in/sonit-maddineni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button size="icon" variant="ghost" className="hover:text-primary" asChild>
              <a href="mailto:smadd28@illinois.edu" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
