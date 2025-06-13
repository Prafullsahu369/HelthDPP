"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientDashboard } from "@/components/dashboard/patient-dashboard"
import { ResearcherDashboard } from "@/components/dashboard/researcher-dashboard"
import { WelcomeCard } from "@/components/dashboard/welcome-card"
import { AgentLogCard } from "@/components/dashboard/agent-log-card"
import { AgentDialog } from "@/components/dashboard/agent-dialog"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Dashboard() {
  const [userRole, setUserRole] = useState<"patient" | "researcher">("patient")
  const [showAgentDialog, setShowAgentDialog] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <WelcomeCard
          name="Sarah Johnson"
          message="Welcome back to your health data dashboard. Here's what's happening with your data."
        />
        <Button onClick={() => setShowAgentDialog(true)} className="hidden md:flex items-center gap-2 rounded-full">
          <MessageSquare className="h-4 w-4" />
          Open Agent Dialog
        </Button>
      </div>

      <Tabs defaultValue="patient" onValueChange={(value) => setUserRole(value as "patient" | "researcher")}>
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="patient">Patient View</TabsTrigger>
          <TabsTrigger value="researcher">Researcher View</TabsTrigger>
        </TabsList>
        <TabsContent value="patient">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <PatientDashboard />
            </div>
            <div>
              <AgentLogCard />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="researcher">
          <ResearcherDashboard />
        </TabsContent>
      </Tabs>

      <Button
        onClick={() => setShowAgentDialog(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <AgentDialog open={showAgentDialog} onClose={() => setShowAgentDialog(false)} />
    </div>
  )
}
