"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, FileText, Calendar, Clock, ArrowUpRight } from "lucide-react"

export default function LicensesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("active")

  // Mock data for licenses
  const activeLicenses = [
    {
      id: "lic-001",
      title: "Genomic Data - Rare Disease Study",
      researcher: "MedResearch Inc.",
      organization: "University Medical Center",
      startDate: "2023-05-15",
      endDate: "2024-05-15",
      fee: "₹180",
      accessCount: 12,
      status: "active",
    },
    {
      id: "lic-002",
      title: "Blood Biomarkers - Inflammatory Response",
      researcher: "Dr. Sarah Johnson",
      organization: "National Health Institute",
      startDate: "2023-04-22",
      endDate: "2024-04-22",
      fee: "₹120",
      accessCount: 8,
      status: "active",
    },
    {
      id: "lic-003",
      title: "Brain MRI Collection - Neurological Disorders",
      researcher: "NeuroTech Labs",
      organization: "Global Research Consortium",
      startDate: "2023-03-10",
      endDate: "2024-03-10",
      fee: "₹250",
      accessCount: 15,
      status: "active",
    },
  ]

  const pendingLicenses = [
    {
      id: "lic-004",
      title: "Cardiac Monitoring Data - Heart Failure Patients",
      researcher: "CardioHealth Research",
      organization: "Heart Institute",
      requestDate: "2023-06-05",
      proposedFee: "₹200",
      status: "pending",
    },
    {
      id: "lic-005",
      title: "Diabetes Management Data - Long-term Study",
      researcher: "Dr. Michael Chen",
      organization: "Diabetes Research Foundation",
      requestDate: "2023-06-02",
      proposedFee: "₹150",
      status: "negotiating",
    },
  ]

  const expiredLicenses = [
    {
      id: "lic-006",
      title: "Allergy Test Results - Immunology Research",
      researcher: "ImmunoLabs Inc.",
      organization: "Allergy Research Center",
      startDate: "2022-01-15",
      endDate: "2023-01-15",
      fee: "₹100",
      accessCount: 22,
      status: "expired",
    },
    {
      id: "lic-007",
      title: "Vaccination Response Data - Antibody Study",
      researcher: "VaccineTech",
      organization: "Immunology Institute",
      startDate: "2022-02-10",
      endDate: "2023-02-10",
      fee: "₹130",
      accessCount: 18,
      status: "expired",
    },
  ]

  const filteredActive = activeLicenses.filter(
    (license) =>
      license.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.researcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.organization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredPending = pendingLicenses.filter(
    (license) =>
      license.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.researcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.organization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredExpired = expiredLicenses.filter(
    (license) =>
      license.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.researcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.organization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Data Licenses</h1>
        <p className="text-muted-foreground">Manage your active, pending, and expired data licenses</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search licenses..."
            className="pl-10 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="rounded-lg">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="active" className="rounded-md">
            Active Licenses
          </TabsTrigger>
          <TabsTrigger value="pending" className="rounded-md">
            Pending Requests
          </TabsTrigger>
          <TabsTrigger value="expired" className="rounded-md">
            Expired Licenses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          {filteredActive.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium">No active licenses found</h3>
                <p className="text-muted-foreground text-center max-w-md mt-2">
                  {searchQuery
                    ? "Try adjusting your search criteria"
                    : "You don't have any active licenses at the moment"}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredActive.map((license) => (
                <Card key={license.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{license.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Licensed to {license.researcher} at {license.organization}
                            </p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Active
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-4 w-4 mr-1" /> Start Date
                            </p>
                            <p className="font-medium">{new Date(license.startDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-4 w-4 mr-1" /> End Date
                            </p>
                            <p className="font-medium">{new Date(license.endDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-4 w-4 mr-1" /> Access Count
                            </p>
                            <p className="font-medium">{license.accessCount} times</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">License Fee</p>
                            <p className="font-medium">{license.fee}/use</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/20 p-6 flex flex-row md:flex-col justify-between items-center md:w-48">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Total Earned</p>
                          <p className="text-2xl font-bold">
                            ₹{Number.parseInt(license.fee.replace("₹", "")) * license.accessCount}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-lg">
                          View Details
                          <ArrowUpRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="pending">
          {filteredPending.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium">No pending license requests</h3>
                <p className="text-muted-foreground text-center max-w-md mt-2">
                  {searchQuery
                    ? "Try adjusting your search criteria"
                    : "You don't have any pending license requests at the moment"}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredPending.map((license) => (
                <Card key={license.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{license.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Requested by {license.researcher} at {license.organization}
                            </p>
                          </div>
                          <Badge
                            className={
                              license.status === "pending"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                            }
                          >
                            {license.status === "pending" ? "Pending" : "Negotiating"}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-4 w-4 mr-1" /> Request Date
                            </p>
                            <p className="font-medium">{new Date(license.requestDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Proposed Fee</p>
                            <p className="font-medium">{license.proposedFee}/use</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/20 p-6 flex flex-row md:flex-col justify-between items-center md:w-48">
                        <div className="flex gap-2">
                          <Button variant="default" size="sm" className="rounded-lg">
                            Accept
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-lg">
                            Negotiate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="expired">
          {filteredExpired.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium">No expired licenses found</h3>
                <p className="text-muted-foreground text-center max-w-md mt-2">
                  {searchQuery
                    ? "Try adjusting your search criteria"
                    : "You don't have any expired licenses at the moment"}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredExpired.map((license) => (
                <Card key={license.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{license.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Licensed to {license.researcher} at {license.organization}
                            </p>
                          </div>
                          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">Expired</Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-4 w-4 mr-1" /> Start Date
                            </p>
                            <p className="font-medium">{new Date(license.startDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-4 w-4 mr-1" /> End Date
                            </p>
                            <p className="font-medium">{new Date(license.endDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-4 w-4 mr-1" /> Access Count
                            </p>
                            <p className="font-medium">{license.accessCount} times</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">License Fee</p>
                            <p className="font-medium">{license.fee}/use</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/20 p-6 flex flex-row md:flex-col justify-between items-center md:w-48">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Total Earned</p>
                          <p className="text-2xl font-bold">
                            ₹{Number.parseInt(license.fee.replace("₹", "")) * license.accessCount}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-lg">
                          Renew License
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
