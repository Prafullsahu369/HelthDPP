"use client"

import { useState, useEffect } from "react"
import { useWallet } from "@/hooks/use-wallet"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { fetchUserDatasets } from "@/lib/story-sdk"
import type { Dataset } from "@/types/dataset"
import { DatasetDetailsDialog } from "@/components/dashboard/dataset-details-dialog"

export default function MyDataPage() {
  const { address, isConnected } = useWallet()
  const { toast } = useToast()
  const [datasets, setDatasets] = useState<Dataset[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserDatasets(address || "")
        setDatasets(data)
      } catch (error) {
        console.error("Error fetching user datasets:", error)
        toast({
          title: "Error",
          description: "Failed to load your datasets",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (address) {
      loadUserData()
    }
  }, [address, toast])

  const handleViewDetails = (dataset: Dataset) => {
    setSelectedDataset(dataset)
    setIsDetailsOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">My Data</h1>
        <p className="text-muted-foreground">Manage your uploaded medical data and track licensing activity</p>
      </div>

      <Tabs defaultValue="uploaded">
        <TabsList>
          <TabsTrigger value="uploaded">Uploaded Data</TabsTrigger>
          <TabsTrigger value="licensed">Licensed Data</TabsTrigger>
        </TabsList>
        <TabsContent value="uploaded" className="mt-6">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader className="h-32 bg-muted"></CardHeader>
                  <CardContent className="h-24 mt-4">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardContent>
                  <CardFooter className="h-12 bg-muted"></CardFooter>
                </Card>
              ))}
            </div>
          ) : datasets.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No data uploaded yet</h3>
              <p className="text-muted-foreground mb-4">
                Upload your medical data to register it as intellectual property
              </p>
              <Button asChild>
                <a href="/dashboard/upload">Upload Data</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {datasets.map((dataset) => (
                <Card key={dataset.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{dataset.title}</CardTitle>
                      <Badge variant={dataset.licenseCount > 0 ? "default" : "outline"}>
                        {dataset.licenseCount} {dataset.licenseCount === 1 ? "License" : "Licenses"}
                      </Badge>
                    </div>
                    <CardDescription>{dataset.dataType}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm line-clamp-2">{dataset.description}</p>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-3 w-3"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>Uploaded {new Date(dataset.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => handleViewDetails(dataset)}>
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="licensed" className="mt-6">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No licensed data yet</h3>
            <p className="text-muted-foreground mb-4">You haven't licensed any datasets for research</p>
            <Button asChild>
              <a href="/dashboard/discover">Discover Datasets</a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {selectedDataset && (
        <DatasetDetailsDialog dataset={selectedDataset} open={isDetailsOpen} onOpenChange={setIsDetailsOpen} />
      )}
    </div>
  )
}
