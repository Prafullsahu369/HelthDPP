import { LandingHero } from "@/components/landing/hero"
import { LandingFeatures } from "@/components/landing/features"
import { LandingHowItWorks } from "@/components/landing/how-it-works"
import { LandingSecurity } from "@/components/landing/security"
import { LandingFooter } from "@/components/landing/footer"
import { LandingHeader } from "@/components/landing/header"
import { LandingTestimonials } from "@/components/landing/testimonials"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <LandingHero />
        <LandingFeatures />
        <LandingHowItWorks />
        <LandingTestimonials />
        <LandingSecurity />
      </main>
      <LandingFooter />
    </div>
  )
}
