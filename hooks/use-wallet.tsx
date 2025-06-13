"use client"

import { useContext } from "react"
import { Web3Context } from "@/components/providers/web3-provider"

export function useWallet() {
  const context = useContext(Web3Context)

  if (context === undefined) {
    throw new Error("useWallet must be used within a Web3Provider")
  }

  return context
}
