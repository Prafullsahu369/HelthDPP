export interface Activity {
  id: string
  type: "upload" | "license" | "royalty" | string
  title: string
  description: string
  timestamp: string
}
