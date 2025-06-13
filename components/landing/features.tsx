import { Card, CardContent } from "@/components/ui/card"
import { Brain, Shield, Lock, FileText, CreditCard, BarChart } from "lucide-react"

export function LandingFeatures() {
  const features = [
    {
      title: "AI Agent Negotiation",
      description:
        "Personal AI agents automatically negotiate fair licensing terms on your behalf using advanced AI models.",
      icon: Brain,
    },
    {
      title: "Blockchain IP Protection",
      description:
        "Your medical data is registered as protected intellectual property on Story Protocol with verifiable ownership.",
      icon: Shield,
    },
    {
      title: "End-to-End Encryption",
      description: "All sensitive healthcare data is encrypted and stored securely on decentralized storage.",
      icon: Lock,
    },
    {
      title: "Smart Contract Licensing",
      description: "Automated license enforcement and royalty distribution through secure smart contracts.",
      icon: FileText,
    },
    {
      title: "Transparent Payments",
      description: "Receive compensation via token-based micropayments with complete transaction transparency.",
      icon: CreditCard,
    },
    {
      title: "Data Usage Analytics",
      description: "Track how your data is being used and monitor your earnings in real-time.",
      icon: BarChart,
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex h-6 items-center rounded-full border border-primary/20 bg-primary/10 px-3 text-sm font-medium text-primary">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              AI-Powered Healthcare Data Licensing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines blockchain technology, AI agents, and secure storage to create a seamless healthcare
              data licensing ecosystem.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-primary/10 shadow-lg">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-full bg-primary/10 p-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
