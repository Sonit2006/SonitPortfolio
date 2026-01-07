import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu } from "lucide-react"

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "Forward Data Lab at UIUC",
    location: "Urbana-Champaign, IL",
    period: "June 2025 – Present",
    highlights: [
      "Built a fine-grained evaluation framework for controllable long-form text generation, decomposing complex instructions into atomic constraints and automatically scoring 1,000+ model outputs to identify structural failures, progression errors, and constraint sensitivity across models." ],
  },
  {
    title: "Technical Lead",
    company: "National Organization for Business and Engineering (NOBE)",
    location: "Urbana-Champaign, IL",
    period: "September 2025 – Present",
    highlights: [
      "Led an 8-person team to design and ship a React web platform and React Native app used by 1,000+ users, driving sprint planning, technical direction, client alignment, and rigorous code reviews to ensure high-quality, on-time releases."
    ],
  },
  {
    title: "Software Developer",
    company: "National Organization for Business and Engineering (NOBE)",
    location: "Urbana-Champaign, IL",
    period: "February 2025 – May 2025",
    highlights: [
      "Developed a Python-powered AI system providing real-time corrective feedback during workouts and built a React + Tailwind dashboard to visualize EMG signals and key metrics, while managing the codebase with 20+ GitHub PRs to keep development smooth and maintainable."
    ],
  },
  {
    title: "Software Development Intern",
    company: "Gen3 Learning",
    location: "Bloomington, IL",
    period: "January 2023 – August 2023",
    highlights: [
      "Built and deployed a React platform for student registration, class participation, and instructor communication, managing the full development lifecycle with AWS CodeCommit, CLI, and Agile workflows from ideation to production."
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-l-4 border-l-primary bg-gradient-to-r from-card via-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary to-primary/0 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                      <polygon
                        points="25,0 50,14.4 50,28.9 25,43.3 0,28.9 0,14.4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
              </div>

              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-md bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 shrink-0 group-hover:border-primary/50 transition-colors">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-xl font-mono">
                      <span className="text-primary/60 text-sm mr-2">{"$"}</span>
                      {exp.title}
                    </CardTitle>
                    <p className="text-base font-medium text-muted-foreground">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{exp.location}</span>
                      <span className="text-primary/40">{"|"}</span>
                      <span className="font-mono text-primary/70">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-muted-foreground flex gap-3">
                      <span className="text-primary shrink-0 mt-1.5 font-mono">{">>"}</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
