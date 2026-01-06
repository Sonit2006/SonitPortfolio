import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  "Azure AI Engineer Associate",
  "AWS Cloud Practitioner",
  "Certified Professional Python Programmer",
  "Intermediate Machine Learning",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <Card key={cert} className="group hover:border-accent/50 transition-all duration-300">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-2 rounded-lg bg-accent/10 shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <p className="font-medium leading-relaxed">{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
