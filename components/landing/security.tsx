import { Card, CardContent } from "@/components/ui/card"
import { Lock, Shield, FileText, RefreshCw } from "lucide-react"

export function LandingSecurity() {
  const securityFeatures = [
    {
      title: "IPFS Encryption",
      description:
        "All data is encrypted with AES-256 before being stored on IPFS, ensuring only authorized parties can access it.",
      icon: Lock,
    },
    {
      title: "On-chain Audit",
      description:
        "Every access to your data is recorded on the blockchain, providing a transparent and immutable audit trail.",
      icon: FileText,
    },
    {
      title: "Access Control",
      description:
        "Fine-grained access control allows you to specify exactly who can access your data and under what conditions.",
      icon: Shield,
    },
    {
      title: "Revoke Access",
      description: "Revoke access to your data at any time, with immediate effect across all platforms and services.",
      icon: RefreshCw,
    },
  ]

  return (
    <section id="security" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex h-6 items-center rounded-full border border-primary/20 bg-primary/10 px-3 text-sm font-medium text-primary">
              Security & Transparency
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Your Data, Your Control</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've built our platform with security and transparency at its core, ensuring you always maintain control
              over your data.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="card-hover border-primary/10 shadow-lg">
              <CardContent className="flex items-start space-x-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 mt-1">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-3xl mt-12 glass-effect rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="rounded-full bg-primary/10 p-4 glow-primary">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Story Protocol Integration</h3>
              <p className="text-muted-foreground">
                Our platform is built on top of Story Protocol, providing a robust framework for intellectual property
                management and licensing in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
