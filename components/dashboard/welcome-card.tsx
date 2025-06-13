import { Card, CardContent } from "@/components/ui/card"

interface WelcomeCardProps {
  name?: string
  message?: string
}

export function WelcomeCard({ name = "User", message = "Welcome to your health data dashboard." }: WelcomeCardProps) {
  return (
    <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Hello, {name}!</h2>
          <p className="text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  )
}
