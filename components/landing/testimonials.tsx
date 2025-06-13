import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function LandingTestimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Researcher",
      content:
        "The HealthData Guardian platform has revolutionized how we access patient data for research. The AI negotiation system ensures fair compensation for patients while giving us the data we need.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content:
        "I've earned over ₹5,000 from my medical data that would otherwise just sit unused. The AI agent handles everything, and I love knowing my data is helping advance medical research.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    {
      name: "Dr. Priya Patel",
      role: "Healthcare Blockchain Expert",
      content:
        "The integration with Story Protocol provides unprecedented IP protection for patient data. This platform sets a new standard for ethical data monetization in healthcare.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PP",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex h-6 items-center rounded-full border border-primary/20 bg-primary/10 px-3 text-sm font-medium text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted by Patients and Researchers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the people who are already benefiting from our platform.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-primary/10 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <svg
                      className="absolute -top-6 -left-6 h-12 w-12 text-primary/20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
