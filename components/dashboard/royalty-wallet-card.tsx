import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, ArrowUpRight } from "lucide-react"

export function RoyaltyWalletCard() {
  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
      <CardHeader>
        <CardTitle>Royalty Wallet</CardTitle>
        <CardDescription>Your earned tokens and available balance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available Balance</p>
              <p className="text-3xl font-bold">₹640</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-secondary p-3">
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="text-xl font-bold">₹450</p>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <p className="text-sm text-muted-foreground">Total Earned</p>
              <p className="text-xl font-bold">₹1,240</p>
            </div>
          </div>

          <Button className="w-full rounded-lg">
            Withdraw Funds
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
