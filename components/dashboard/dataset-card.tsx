import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Users } from "lucide-react"

interface Dataset {
  id: string
  title: string
  description: string
  type: string
  owner: string
  price: string
  samples: number
  image?: string
}

interface DatasetCardProps {
  dataset: Dataset
}

export function DatasetCard({ dataset }: DatasetCardProps) {
  const imageSrc = dataset.image || "/placeholder.svg?height=200&width=400"

  return (
    <Card className="overflow-hidden border-primary/20">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img src={imageSrc || "/placeholder.svg"} alt={dataset.title} className="h-full w-full object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">{dataset.title}</h3>
          <Badge variant="outline" className="bg-primary/5">
            {dataset.type}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">Owner: {dataset.owner}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{dataset.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>{dataset.price}/use</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{dataset.samples} samples</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">License Dataset</Button>
      </CardFooter>
    </Card>
  )
}
