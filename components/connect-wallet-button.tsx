"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Loader2 } from "lucide-react"

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = async () => {
    setIsConnecting(true)

    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock wallet connection
    setWalletAddress("0x1234...5678")
    setIsConnected(true)
    setIsConnecting(false)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  if (isConnected) {
    return (
      <Button variant="outline" className="rounded-lg" onClick={handleDisconnect}>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          {walletAddress}
        </span>
      </Button>
    )
  }

  return (
    <Button onClick={handleConnect} disabled={isConnecting} className="rounded-lg">
      {isConnecting ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Connecting...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </span>
      )}
    </Button>
  )
}
