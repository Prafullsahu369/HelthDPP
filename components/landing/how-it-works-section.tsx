import { Upload, Bot, Search, MessageSquare, FileCheck, DollarSign } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Patient Data Upload",
      description:
        "Patients securely upload their medical data through our encrypted interface. All files are automatically encrypted with AES before storage.",
      icon: Upload,
    },
    {
      title: "AI Agent Processing",
      description:
        "Your personal AI agent automatically registers the data on Story Protocol as protected IP and generates a customized license with your preferred terms.",
      icon: Bot,
    },
    {
      title: "Researcher Discovery",
      description:
        "Research organizations discover your anonymized data through metadata and their AI agents automatically initiate licensing requests based on relevance.",
      icon: Search,
    },
    {
      title: "Automated Negotiation",
      description:
        "AI agents from both parties negotiate fair terms based on your preferences, data value, and market rates, reaching an optimal agreement without human intervention.",
      icon: MessageSquare,
    },
    {
      title: "Smart Contract Execution",
      description:
        "Once terms are agreed upon, a smart contract automatically executes the license, transfers payment, and grants secure access to the encrypted data.",
      icon: FileCheck,
    },
    {
      title: "Royalty Distribution",
      description:
        "You receive automatic payments for each use of your data, either as cryptocurrency tokens or converted to fiat currency, with complete transaction transparency.",
      icon: DollarSign,
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex h-6 items-center rounded-full border border-primary/20 bg-primary/10 px-3 text-sm font-medium text-primary">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Automated Healthcare Data Licensing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform streamlines the entire process from data upload to licensing and payment through AI agents
              and blockchain technology.
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  <div
                    className={`md:text-${index % 2 === 0 ? "right" : "left"} space-y-3 ${index % 2 !== 0 ? "md:order-2" : ""}`}
                  >
                    <h3 className="text-xl font-bold flex items-center gap-2 md:justify-content-end">
                      {index % 2 === 0 ? (
                        <>
                          {step.title}
                          <step.icon className="h-6 w-6 text-primary md:hidden" />
                        </>
                      ) : (
                        <>
                          <step.icon className="h-6 w-6 text-primary md:hidden" />
                          {step.title}
                        </>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <div
                    className={`${index % 2 !== 0 ? "md:order-1" : ""} rounded-2xl overflow-hidden border border-primary/10 organic-shape bg-accent/50`}
                  >
                    <div className="flex items-center justify-center p-8 h-full">
                      <step.icon className="h-16 w-16 text-primary hidden md:block" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
