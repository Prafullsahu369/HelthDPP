"use client"

import { createContext, useEffect, useState, type ReactNode } from "react"
import { ethers } from "ethers"

interface Web3ContextType {
  provider: ethers.BrowserProvider | null
  address: string | null
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

export const Web3Context = createContext<Web3ContextType>({
  provider: null,
  address: null,
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
})

export function Web3Provider({ children }: { children: ReactNode }) {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Check if MetaMask is installed
    const checkConnection = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum)
          const accounts = await provider.listAccounts()

          if (accounts.length > 0) {
            setProvider(provider)
            setAddress(accounts[0].address)
            setIsConnected(true)
          }
        } catch (error) {
          console.error("Failed to connect to wallet:", error)
        }
      }
    }

    checkConnection()

    // Listen for account changes
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)
        } else {
          setAddress(null)
          setIsConnected(false)
        }
      })
    }

    return () => {
      if (typeof window !== "undefined" && window.ethereum) {
        window.ethereum.removeAllListeners("accountsChanged")
      }
    }
  }, [])

  const connect = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        await window.ethereum.request({ method: "eth_requestAccounts" })
        const accounts = await provider.listAccounts()

        if (accounts.length > 0) {
          setProvider(provider)
          setAddress(accounts[0].address)
          setIsConnected(true)
        }
      } catch (error) {
        console.error("Failed to connect to wallet:", error)
      }
    } else {
      window.open("https://metamask.io/download/", "_blank")
    }
  }

  const disconnect = () => {
    setProvider(null)
    setAddress(null)
    setIsConnected(false)
  }

  return (
    <Web3Context.Provider
      value={{
        provider,
        address,
        isConnected,
        connect,
        disconnect,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
