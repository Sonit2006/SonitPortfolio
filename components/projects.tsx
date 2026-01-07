import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Secure Knock",
    description:
      "A real-time home security system that uses computer vision to identify visitors and sends SMS alerts when an unknown face is detected.",
    github: "https://github.com/Sonit2006/SecureKnock",
    tags: ["Computer Vision", "Security", "Real-time"],
  },
  {
    title: "LongGenBench (LLM Evaluation)",
    description:
      "Research prototype of LongGenBench for benchmarking instruction-following ability of LLMs in long-text generation, implemented as an interactive Python notebook.",
    github: "https://github.com/Sonit2006/LLM_Evaluation_LongGenBench",
    tags: ["LLM", "Research", "Benchmarking"],
  },
  {
    title: "fileChat",
    description:
      "RAG application that scans files and folders, builds a FAISS index using vector embeddings, and enables semantic search and chat over large local document collections.",
    github: "https://github.com/Sonit2006/fileChat",
    tags: ["RAG", "NLP", "Vector Search"],
  },
  {
    title: "War Thunder Target Finder (WTTF)",
    description:
      "Real-time object detection assistant using a YOLO model that highlights detected vehicles in the game War Thunder.",
    github: "https://github.com/CS222-UIUC/team-68-project",
    tags: ["YOLO", "Object Detection", "Gaming"],
  },
  {
    title: "SG Website",
    description:
      "Full-stack web platform built with Node.js and MySQL APIs, integrated with a BotPress chatbot to encourage student engagement through points and rewards.",
    github: "https://github.com/Sonit2006/SGwebsite",
    tags: ["Full-stack", "MySQL", "Chatbot"],
  },
  {
    title: "SafeFit Website",
    description: "Website for a startup that provides real-time form correction for people working out in the gym.",
    github: "https://github.com/Sonit2006/SafeFit_Website",
    tags: ["Startup", "Health Tech", "Real-time"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-gradient-to-br from-card via-card to-card/50"
            >
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                      <line x1="20" y1="0" x2="20" y2="15" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="20" y1="25" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="0" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="25" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 group-hover:border-primary/70 transition-colors" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40 group-hover:border-primary/70 transition-colors" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40 group-hover:border-primary/70 transition-colors" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 group-hover:border-primary/70 transition-colors" />

              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors font-mono">
                      <span className="text-primary/60">{">"}</span> {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-sm bg-primary/10 text-primary font-mono border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
