import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted by Patients and Researchers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our users about how HealthData Licensing Guardian has transformed healthcare data sharing.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col space-y-4 p-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </div>
              </div>
              <blockquote className="text-lg italic">
                "As a patient with rare disease data, I've been able to contribute to research while maintaining control
                and earning fair compensation. The AI agent handles everything automatically!"
              </blockquote>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <div className="flex items-center space-x-4">
                <img src="/images/testimonial-1.png" alt="Ayesha K." className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">Ayesha K.</p>
                  <p className="text-xs text-muted-foreground">Patient</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col space-y-4 p-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </div>
              </div>
              <blockquote className="text-lg italic">
                "Our research team has accelerated discovery by 300% with access to ethically licensed healthcare data.
                The AI negotiation ensures we get fair terms while respecting patient rights."
              </blockquote>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/testimonial-2.png"
                  alt="Dr. Rajiv M."
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Dr. Rajiv M.</p>
                  <p className="text-xs text-muted-foreground">Lead Researcher, MedAI Corp</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col space-y-4 p-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </div>
              </div>
              <blockquote className="text-lg italic">
                "The blockchain-based IP protection gives me confidence that my sensitive health data is being used
                properly. I've earned over ₹5,000 from licensing my anonymized medical history."
              </blockquote>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <div className="flex items-center space-x-4">
                <img src="/images/testimonial-3.png" alt="Priya S." className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">Priya S.</p>
                  <p className="text-xs text-muted-foreground">Patient</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
