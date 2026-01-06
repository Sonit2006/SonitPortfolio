import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "Forward Data Lab at UIUC",
    location: "Urbana-Champaign, IL",
    period: "June 2025 – Present",
    highlights: [
      "Developing a fine-grained evaluation framework for controllable long-form text generation, converting multi-part human instructions into atomic constraints and computing both constraint-level and prompt-level compliance scores.",
      "Expanding the benchmark to 25+ constraint families (e.g., structural, progression-based, semantic, formatting) and building logic to validate multi-part outputs, progression rules, and meta-linked constraints for each model response.",
      "Implementing automated scoring pipelines that process 1,000+ model outputs, generate per-response and per-prompt analytics, and export aggregated results to CSV for visualization and statistical analysis.",
      "Analyzing model failure modes—such as inconsistent structure, broken progression logic, and constraint sensitivity—to produce interpretable insights that support more reliable and controllable LLM behavior.",
    ],
  },
  {
    title: "Technical Lead",
    company: "National Organization for Business and Engineering (NOBE): Illinois Chapter",
    location: "Urbana-Champaign, IL",
    period: "September 2025 – Present",
    highlights: [
      "Leading an 8-member team to design and launch a React-based website and React Native app serving 1,000+ users",
      "Providing technical guidance for the team, conducting weekly client meetings, translating requirements into actionable sprints and performing 20+ code reviews to ensure quality and on-time deployment",
    ],
  },
  {
    title: "Software Developer",
    company: "NOBE",
    location: "Urbana-Champaign, IL",
    period: "February 2025 – May 2025",
    highlights: [
      "Assisted in creating an AI system using Python that provides instant corrective feedback to users during workouts",
      "Developed a web dashboard in React/Tailwind CSS to visualize EMG activity and key startup metrics for 30+ test users",
      "Managed team codebase with Git/GitHub, reviewing 20+ pull requests and resolving conflicts",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Gen3 Learning",
    location: "Bloomington, IL",
    period: "January 2023 – August 2023",
    highlights: [
      "Developed a React-based platform for 200+ students to register, attend classes, and communicate with instructors",
      "Used AWS CodeCommit and AWS CLI to host code and deploy code changes, managing 10+ updates",
      "Managed project scope and schedule using Agile techniques throughout the entire project lifecycle",
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
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-base font-medium text-muted-foreground">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-muted-foreground flex gap-3">
                      <span className="text-primary shrink-0 mt-1.5">▹</span>
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
