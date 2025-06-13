import { Card, CardContent } from "@/components/ui/card"

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              AI-Powered Decentralized Healthcare
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform connects patients and researchers through blockchain technology, ensuring secure data
              sharing, fair compensation, and accelerated medical innovation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-4">
                <img src="/images/feature-secure.png" alt="Secure Data Sharing" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">Secure Data Sharing</h3>
              <p className="text-center text-muted-foreground">
                Patient data is securely stored and shared using blockchain technology, ensuring privacy and control.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-4">
                <img src="/images/feature-ip.png" alt="Automated IP Registration" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">Automated IP Registration</h3>
              <p className="text-center text-muted-foreground">
                Medical data is automatically registered as intellectual property using Story Protocol.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-4">
                <img src="/images/feature-compensation.png" alt="Fair Compensation" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">Fair Compensation</h3>
              <p className="text-center text-muted-foreground">
                Patients receive automatic royalty payments when their data is licensed for research.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-4">
                <img src="/images/feature-licensing.png" alt="Automated Licensing" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">Automated Licensing</h3>
              <p className="text-center text-muted-foreground">
                Researchers can easily license patient data with transparent terms and automatic payments.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-4">
                <img src="/images/feature-ai.png" alt="AI-Powered Matching" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Matching</h3>
              <p className="text-center text-muted-foreground">
                AI agents automatically match researchers with relevant patient data for their studies.
              </p>
            </CardContent>
          </Card>
          <Card className="feature-card border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-4">
                <img src="/images/feature-dispute.png" alt="Dispute Resolution" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">Dispute Resolution</h3>
              <p className="text-center text-muted-foreground">
                Automated dispute handling through Story Protocol ensures fair resolution of conflicts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
