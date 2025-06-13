import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Upload, BarChart, Bot, Database, FileCheck } from "lucide-react"

export function LandingHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg overflow-hidden hexagon-grid">
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2 w-fit">
              Decentralized Healthcare Data Platform
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              VitalKey
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              AI-powered agent that protects and monetizes your health data. Secure, transparent, and fair.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/dashboard/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Your Report
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/dashboard">
                  <BarChart className="mr-2 h-4 w-4" />
                  View Dashboard
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full">
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

            {/* Main illustration */}
            <div className="relative z-10 blob-shape bg-white/90 dark:bg-gray-800/90 p-6 shadow-xl backdrop-blur-sm border border-primary/10 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="col-span-2 bg-primary/10 rounded-lg p-4 flex items-center animate-float glow-primary">
                  <Bot className="h-10 w-10 text-primary mr-3" />
                  <div>
                    <h3 className="font-medium">AI Agent Protection</h3>
                    <p className="text-sm text-muted-foreground">Secures your medical data</p>
                  </div>
                </div>

                <div className="bg-accent/20 rounded-lg p-4 flex flex-col items-center justify-center animate-float-delay-1">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-2">
                    <Database className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Blockchain</span>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center justify-center animate-float-delay-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">IP Protection</span>
                </div>

                <div className="col-span-2 bg-secondary/20 rounded-lg p-4 animate-float shimmer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <Shield className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Patient Data</span>
                    </div>
                    <div className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                      Protected
                    </div>
                  </div>
                  <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
