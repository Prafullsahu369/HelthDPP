import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { UserStats } from "@/types/user-stats"
import { TrendingUp, Database, Shield, Activity } from "lucide-react"

interface StatsCardsProps {
  isLoading: boolean
  stats: UserStats | null
  userType: "patient" | "researcher"
}

export function StatsCards({ isLoading, stats, userType }: StatsCardsProps) {
  return (
    <>
      <Card className="stats-card border-primary/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {userType === "patient" ? "Total Uploads" : "Licensed Datasets"}
          </CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <Database className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? <div className="h-8 w-24 animate-pulse rounded bg-muted"></div> : stats?.totalUploads || 0}
          </div>
          <p className="text-xs text-muted-foreground">
            {userType === "patient" ? "+2 from last month" : "+5 from last month"}
          </p>
        </CardContent>
      </Card>
      <Card className="stats-card border-primary/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {userType === "patient" ? "Total Earnings" : "Total Spent"}
          </CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-muted"></div>
            ) : (
              `₹${stats?.totalEarnings || 0}`
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {userType === "patient" ? "+10.1% from last month" : "+12.5% from last month"}
          </p>
        </CardContent>
      </Card>
      <Card className="stats-card border-primary/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {userType === "patient" ? "Active Licenses" : "Research Projects"}
          </CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <Shield className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? <div className="h-8 w-24 animate-pulse rounded bg-muted"></div> : stats?.activeLicenses || 0}
          </div>
          <p className="text-xs text-muted-foreground">
            {userType === "patient" ? "+2 new licenses" : "+1 new project"}
          </p>
        </CardContent>
      </Card>
      <Card className="stats-card border-primary/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {userType === "patient" ? "Data Usage" : "Data Insights"}
          </CardTitle>
          <div className="rounded-full bg-primary/10 p-1">
            <Activity className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-muted"></div>
            ) : userType === "patient" ? (
              stats?.totalUsageCount || 0
            ) : (
              stats?.dataInsights || 0
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {userType === "patient" ? "+19% from last month" : "+7 new insights"}
          </p>
        </CardContent>
      </Card>
    </>
  )
}
