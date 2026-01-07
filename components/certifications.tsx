import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "Azure AI Engineer Associate",
    organization: "Microsoft",
    credentialUrl: "https://learn.microsoft.com/en-us/users/sonitmaddineni-5370/credentials/837196eaa7d0a5de",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    credentialUrl: "https://www.credly.com/badges/a5ae3034-cefb-4f79-9802-4e1861b9f199/linked_in_profile",
  },
  {
    name: "Intermediate Machine Learning",
    organization: "Kaggle",
    credentialUrl: "https://www.credly.com/badges/4e94fd85-94a6-4036-9c5e-a79652356523/linked_in_profile",
  },
  {
    name: "PCAP - Certified Associate Python Programmer",
    organization: "Python Institute",
    credentialUrl: "https://www.credly.com/badges/0d46606a-a6b5-46d3-baff-663b9b7cf7fc/linked_in_profile",
  },
  {
    name: "[PCPP-32-101] PCPP1 – Certified Professional Python Programmer Level 1",
    organization: "Python Institute",
    credentialUrl: "https://www.credly.com/badges/a5ae3034-cefb-4f79-9802-4e1861b9f199/linked_in_profile",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-8 h-8 opacity-30 animate-float-slow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-[15%] w-10 h-10 opacity-20 animate-float-slower">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
            <rect x="2" y="7" width="20" height="10" rx="2" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M7 7V2" />
            <path d="M17 7V2" />
            <path d="M7 17v5" />
            <path d="M17 17v5" />
          </svg>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="group hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10"
              style={{
                animation: `slideInFromRight 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0 group-hover:bg-accent/20 transition-all duration-300 group-hover:rotate-12">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold leading-relaxed mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.organization}</p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors group/link"
                      >
                        View Credential
                        <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
