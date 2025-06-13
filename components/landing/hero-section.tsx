import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-gradient-to-b from-accent to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Secure • Ethical • Empowering
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ethical Healthcare Data Licensing
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                HealthData Guardian empowers patients to securely license their medical data while ensuring fair
                compensation through AI-powered negotiation and blockchain technology.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-medium rounded-full">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium rounded-full">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden sm:w-full lg:order-last">
            <div className="relative h-full w-full organic-shape bg-primary/10 p-2">
              <div className="absolute inset-0 organic-shape-alt bg-primary/5 -rotate-12 scale-95"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Healthcare Data Licensing Platform"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
