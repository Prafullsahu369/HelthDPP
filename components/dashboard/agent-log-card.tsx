import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AgentLogCard() {
  const recentActivities = [
    {
      id: "1",
      action: "Data encryption completed",
      timestamp: "10 minutes ago",
    },
    {
      id: "2",
      action: "License negotiation with Research Lab",
      timestamp: "2 hours ago",
    },
    {
      id: "3",
      action: "Smart contract deployment",
      timestamp: "Yesterday",
    },
  ]

  return (
    <Card className="h-full border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">AI Agent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Agent" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{activity.action}</p>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
