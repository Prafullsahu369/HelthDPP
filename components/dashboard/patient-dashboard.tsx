"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ActivityFeed } from "@/components/dashboard/activity-feed"

export function PatientDashboard() {
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const stats = {
    totalUploads: 12,
    totalEarnings: 2450,
    activeLicenses: 8,
    totalUsageCount: 24,
    dataInsights: 15,
  }

  const activities = [
    {
      id: "1",
      type: "upload",
      title: "Dataset Uploaded",
      description: "You uploaded a new genomic dataset",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      type: "license",
      title: "New License",
      description: "Your MRI dataset was licensed by Research Lab Inc.",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "3",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received ₹350 for dataset usage",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCards isLoading={isLoading} stats={stats} userType="patient" />

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your recent data activity and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="uploads">Uploads</TabsTrigger>
              <TabsTrigger value="licenses">Licenses</TabsTrigger>
              <TabsTrigger value="royalties">Royalties</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <ActivityFeed activities={activities} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value="uploads" className="mt-4">
              <ActivityFeed activities={activities.filter((a) => a.type === "upload")} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value="licenses" className="mt-4">
              <ActivityFeed activities={activities.filter((a) => a.type === "license")} isLoading={isLoading} />
            </TabsContent>
            <TabsContent value="royalties" className="mt-4">
              <ActivityFeed activities={activities.filter((a) => a.type === "royalty")} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
