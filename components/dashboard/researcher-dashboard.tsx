"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DatasetCard } from "@/components/dashboard/dataset-card"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { Search } from "lucide-react"

export function ResearcherDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const stats = {
    totalUploads: 0,
    totalEarnings: 5200,
    activeLicenses: 12,
    totalUsageCount: 0,
    dataInsights: 15,
  }

  const datasets = [
    {
      id: "1",
      title: "Genomic Data - Rare Disease Study",
      description: "Comprehensive genomic data from patients with rare genetic disorders",
      type: "Genomic",
      owner: "Medical Research Institute",
      price: "₹180",
      samples: 500,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "2",
      title: "Brain MRI Collection",
      description: "High-resolution MRI scans of brain activity during cognitive tasks",
      type: "Imaging",
      owner: "Neuroscience Lab",
      price: "₹250",
      samples: 120,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "3",
      title: "Blood Test Results - Diabetes",
      description: "Longitudinal blood test data from diabetes patients over 5 years",
      type: "Blood Test",
      owner: "Diabetes Research Center",
      price: "₹120",
      samples: 1500,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "4",
      title: "ECG Data Collection",
      description: "Electrocardiogram readings from patients with various heart conditions",
      type: "Cardiac",
      owner: "Heart Institute",
      price: "₹150",
      samples: 800,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const filteredDatasets = datasets.filter(
    (dataset) =>
      dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCards isLoading={isLoading} stats={stats} userType="researcher" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Discover Datasets</CardTitle>
          <CardDescription>Find and license health datasets for your research</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search datasets..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Datasets</TabsTrigger>
              <TabsTrigger value="genomic">Genomic</TabsTrigger>
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="clinical">Clinical</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDatasets.map((dataset) => (
                  <DatasetCard key={dataset.id} dataset={dataset} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="genomic" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDatasets
                  .filter((dataset) => dataset.type.toLowerCase() === "genomic")
                  .map((dataset) => (
                    <DatasetCard key={dataset.id} dataset={dataset} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="imaging" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDatasets
                  .filter((dataset) => dataset.type.toLowerCase() === "imaging")
                  .map((dataset) => (
                    <DatasetCard key={dataset.id} dataset={dataset} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="clinical" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDatasets
                  .filter(
                    (dataset) =>
                      dataset.type.toLowerCase() === "blood test" || dataset.type.toLowerCase() === "cardiac",
                  )
                  .map((dataset) => (
                    <DatasetCard key={dataset.id} dataset={dataset} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredDatasets.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No datasets found matching your search criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
