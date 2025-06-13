"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ArrowUpDown } from "lucide-react"

// Mock data for dataset earnings
const datasetEarnings = [
  {
    id: "1",
    title: "Genomic Data - Rare Disease Study",
    type: "DNA/Genetic",
    accesses: 12,
    licenseFee: 180,
    totalEarned: 2160,
    lastAccessed: "2023-05-15",
  },
  {
    id: "2",
    title: "Brain MRI Collection - Neurological Disorders",
    type: "Imaging",
    accesses: 15,
    licenseFee: 250,
    totalEarned: 3750,
    lastAccessed: "2023-05-12",
  },
  {
    id: "3",
    title: "Blood Test Results - January 2023",
    type: "Blood Test",
    accesses: 8,
    licenseFee: 120,
    totalEarned: 960,
    lastAccessed: "2023-05-10",
  },
  {
    id: "4",
    title: "ECG Report",
    type: "Cardiac",
    accesses: 6,
    licenseFee: 150,
    totalEarned: 900,
    lastAccessed: "2023-05-08",
  },
  {
    id: "5",
    title: "Allergy Test",
    type: "Immunology",
    accesses: 3,
    licenseFee: 100,
    totalEarned: 300,
    lastAccessed: "2023-05-05",
  },
  {
    id: "6",
    title: "Vaccination Response Data - Antibody Study",
    type: "Immunology",
    accesses: 4,
    licenseFee: 130,
    totalEarned: 520,
    lastAccessed: "2023-05-03",
  },
  {
    id: "7",
    title: "Chest X-Ray - COVID Recovery",
    type: "Imaging",
    accesses: 7,
    licenseFee: 200,
    totalEarned: 1400,
    lastAccessed: "2023-05-01",
  },
]

export function DatasetEarningsTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortColumn, setSortColumn] = useState("totalEarned")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const filteredData = datasetEarnings.filter(
    (dataset) =>
      dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return 0
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search datasets..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">
                <Button variant="ghost" className="p-0 font-medium" onClick={() => handleSort("title")}>
                  Dataset
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-medium" onClick={() => handleSort("type")}>
                  Type
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" className="p-0 font-medium" onClick={() => handleSort("accesses")}>
                  Accesses
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" className="p-0 font-medium" onClick={() => handleSort("licenseFee")}>
                  License Fee
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" className="p-0 font-medium" onClick={() => handleSort("totalEarned")}>
                  Total Earned
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" className="p-0 font-medium" onClick={() => handleSort("lastAccessed")}>
                  Last Accessed
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((dataset) => (
                <TableRow key={dataset.id}>
                  <TableCell className="font-medium">{dataset.title}</TableCell>
                  <TableCell>{dataset.type}</TableCell>
                  <TableCell className="text-right">{dataset.accesses}</TableCell>
                  <TableCell className="text-right">₹{dataset.licenseFee}</TableCell>
                  <TableCell className="text-right font-medium">₹{dataset.totalEarned}</TableCell>
                  <TableCell className="text-right">{new Date(dataset.lastAccessed).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
