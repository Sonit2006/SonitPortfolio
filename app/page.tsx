import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Footer } from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <SpaceBackground />
      <FloatingElements />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </main>
  )
}
