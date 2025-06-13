import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { Dataset } from "@/types/dataset"

interface DatasetDetailsDialogProps {
  dataset: Dataset
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DatasetDetailsDialog({ dataset, open, onOpenChange }: DatasetDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{dataset.title}</DialogTitle>
            <Badge variant={dataset.dataType === "dna" ? "default" : "outline"}>{dataset.dataType}</Badge>
          </div>
          <DialogDescription>Uploaded on {new Date(dataset.uploadDate).toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Description</h4>
            <p className="text-sm text-muted-foreground">{dataset.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">IP Registration</h4>
              <p className="text-sm text-muted-foreground">Registered with Story Protocol</p>
              <p className="text-sm font-mono mt-1">IP ID: {dataset.ipId.slice(0, 10)}...</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">License Count</h4>
              <p className="text-sm text-muted-foreground">{dataset.licenseCount} active licenses</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">License Terms</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Research use only, no commercial applications</p>
              <p>• Attribution required in publications</p>
              <p>• No redistribution of raw data</p>
              <p>• Royalty payments for any derived products</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Licensing History</h4>
            {dataset.licenseCount > 0 ? (
              <div className="text-sm space-y-2">
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <div>
                    <p className="font-medium">Researcher: 0x1a2b...3c4d</p>
                    <p className="text-xs text-muted-foreground">Licensed on {new Date().toLocaleDateString()}</p>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No licensing history yet</p>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Royalty Earnings</h4>
            <p className="text-sm text-muted-foreground">Total earnings: {dataset.totalRoyalties} MEDI</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
