"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface LicenseRequest {
  id: string
  requester: string
  datasetTitle: string
  requestDate: string
  offerAmount: number
  status: "pending" | "approved" | "rejected" | "negotiating"
}

export function LicenseRequestsTable() {
  const { toast } = useToast()
  const [licenseRequests, setLicenseRequests] = useState<LicenseRequest[]>([
    {
      id: "req1",
      requester: "MedResearch Inc.",
      datasetTitle: "Genomic Data - Ancestry Analysis",
      requestDate: "2023-05-15",
      offerAmount: 150,
      status: "pending",
    },
    {
      id: "req2",
      requester: "HealthAnalytics Ltd.",
      datasetTitle: "Blood Test Results - January 2023",
      requestDate: "2023-05-14",
      offerAmount: 180,
      status: "negotiating",
    },
    {
      id: "req3",
      requester: "BioGenetics Corp.",
      datasetTitle: "Chest X-Ray - COVID Recovery",
      requestDate: "2023-05-10",
      offerAmount: 200,
      status: "pending",
    },
  ])

  const handleApprove = (id: string) => {
    setLicenseRequests(licenseRequests.map((req) => (req.id === id ? { ...req, status: "approved" } : req)))
    toast({
      title: "License request approved",
      description: "The license request has been approved and payment will be processed.",
    })
  }

  const handleReject = (id: string) => {
    setLicenseRequests(licenseRequests.map((req) => (req.id === id ? { ...req, status: "rejected" } : req)))
    toast({
      title: "License request rejected",
      description: "The license request has been rejected.",
    })
  }

  const handleNegotiate = (id: string) => {
    setLicenseRequests(licenseRequests.map((req) => (req.id === id ? { ...req, status: "negotiating" } : req)))
    toast({
      title: "Negotiation started",
      description: "Your AI agent will negotiate better terms for this license request.",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      case "approved":
        return (
          <Badge variant="default" className="bg-green-500">
            Approved
          </Badge>
        )
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      case "negotiating":
        return (
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
            Negotiating
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Requester</TableHead>
            <TableHead>Dataset</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Offer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {licenseRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="font-medium">{request.requester}</TableCell>
              <TableCell>{request.datasetTitle}</TableCell>
              <TableCell>{request.requestDate}</TableCell>
              <TableCell>₹{request.offerAmount}</TableCell>
              <TableCell>{getStatusBadge(request.status)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {request.status === "pending" && (
                    <>
                      <Button variant="outline" size="sm" onClick={() => handleNegotiate(request.id)}>
                        Negotiate
                      </Button>
                      <Button variant="default" size="sm" onClick={() => handleApprove(request.id)}>
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleReject(request.id)}>
                        Reject
                      </Button>
                    </>
                  )}
                  {request.status === "negotiating" && (
                    <Button variant="outline" size="sm" disabled>
                      AI Negotiating...
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
