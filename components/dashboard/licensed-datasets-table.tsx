"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface LicensedDataset {
  id: string
  title: string
  owner: string
  licenseDate: string
  expiryDate: string
  fee: number
  status: "active" | "expired" | "pending"
}

export function LicensedDatasetsTable() {
  const { toast } = useToast()
  const [licensedDatasets, setLicensedDatasets] = useState<LicensedDataset[]>([
    {
      id: "lic1",
      title: "Genomic Data - Rare Disease Study",
      owner: "0x7890...1234",
      licenseDate: "2023-04-15",
      expiryDate: "2024-04-15",
      fee: 180,
      status: "active",
    },
    {
      id: "lic2",
      title: "Blood Biomarkers - Inflammatory Response",
      owner: "0x8901...2345",
      licenseDate: "2023-03-22",
      expiryDate: "2024-03-22",
      fee: 120,
      status: "active",
    },
    {
      id: "lic3",
      title: "Brain MRI Collection - Neurological Disorders",
      owner: "0x9012...3456",
      licenseDate: "2023-02-10",
      expiryDate: "2024-02-10",
      fee: 250,
      status: "active",
    },
    {
      id: "lic4",
      title: "Cardiac Monitoring Data - Heart Failure Patients",
      owner: "0xa123...4567",
      licenseDate: "2023-01-05",
      expiryDate: "2024-01-05",
      fee: 200,
      status: "pending",
    },
  ])

  const handleRenew = (id: string) => {
    setLicensedDatasets(
      licensedDatasets.map((dataset) => {
        if (dataset.id === id) {
          const currentExpiryDate = new Date(dataset.expiryDate)
          const newExpiryDate = new Date(currentExpiryDate)
          newExpiryDate.setFullYear(currentExpiryDate.getFullYear() + 1)

          return {
            ...dataset,
            expiryDate: newExpiryDate.toISOString().split("T")[0],
          }
        }
        return dataset
      }),
    )

    toast({
      title: "License renewed",
      description: "The license has been renewed for another year.",
    })
  }

  const handleDownload = (id: string) => {
    toast({
      title: "Downloading dataset",
      description: "Your dataset is being decrypted and downloaded.",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-500">
            Active
          </Badge>
        )
      case "expired":
        return <Badge variant="destructive">Expired</Badge>
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dataset</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>License Date</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {licensedDatasets.map((dataset) => (
            <TableRow key={dataset.id}>
              <TableCell className="font-medium">{dataset.title}</TableCell>
              <TableCell>{dataset.owner}</TableCell>
              <TableCell>{dataset.licenseDate}</TableCell>
              <TableCell>{dataset.expiryDate}</TableCell>
              <TableCell>₹{dataset.fee}</TableCell>
              <TableCell>{getStatusBadge(dataset.status)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {dataset.status === "active" && (
                    <>
                      <Button variant="outline" size="sm" onClick={() => handleDownload(dataset.id)}>
                        Download
                      </Button>
                      <Button variant="default" size="sm" onClick={() => handleRenew(dataset.id)}>
                        Renew
                      </Button>
                    </>
                  )}
                  {dataset.status === "pending" && (
                    <Button variant="outline" size="sm" disabled>
                      Processing...
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
