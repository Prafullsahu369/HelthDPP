import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Decentralized Healthcare Innovation
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect patients and researchers on a secure blockchain platform to accelerate medical research and
                vaccine development while ensuring fair compensation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-medium">
                <Link href="#features">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="hero-image-container mx-auto aspect-video overflow-hidden sm:w-full lg:order-last">
            <img
              src="/images/hero-image.png"
              width={600}
              height={400}
              alt="Healthcare Innovation Platform"
              className="hero-image w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
