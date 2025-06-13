"use client"

import { useState, useEffect } from "react"
import { useWallet } from "@/hooks/use-wallet"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { DatasetCard } from "@/components/dashboard/dataset-card"
import { fetchAvailableDatasets, licenseDataset } from "@/lib/story-sdk"
import type { Dataset } from "@/types/dataset"

export default function DiscoverPage() {
  const { address, isConnected } = useWallet()
  const { toast } = useToast()
  const [datasets, setDatasets] = useState<Dataset[]>([])
  const [filteredDatasets, setFilteredDatasets] = useState<Dataset[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadDatasets = async () => {
      try {
        const data = await fetchAvailableDatasets()
        setDatasets(data)
        setFilteredDatasets(data)
      } catch (error) {
        console.error("Error fetching datasets:", error)
        toast({
          title: "Error",
          description: "Failed to load available datasets",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadDatasets()
  }, [toast])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredDatasets(datasets)
    } else {
      const filtered = datasets.filter(
        (dataset) =>
          dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dataset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dataset.dataType.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredDatasets(filtered)
    }
  }, [searchQuery, datasets])

  const handleLicense = async (datasetId: string) => {
    try {
      await licenseDataset(datasetId, address || "")
      toast({
        title: "Success",
        description: "You have successfully licensed this dataset",
      })

      // Update the dataset status in the UI
      setDatasets((prevDatasets) =>
        prevDatasets.map((dataset) => (dataset.id === datasetId ? { ...dataset, licensed: true } : dataset)),
      )
    } catch (error) {
      console.error("Error licensing dataset:", error)
      toast({
        title: "Error",
        description: "Failed to license the dataset",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Discover Datasets</h1>
        <p className="text-muted-foreground">Browse and license patient data for your research</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search datasets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="blood">Blood Tests</TabsTrigger>
              <TabsTrigger value="dna">DNA/Genetic</TabsTrigger>
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
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
        ) : filteredDatasets.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No datasets found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDatasets.map((dataset) => (
              <DatasetCard key={dataset.id} dataset={dataset} onLicense={() => handleLicense(dataset.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
