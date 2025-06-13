"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

interface AIAgentContextType {
  isAgentActive: boolean
  agentName: string
  lastActivity: Date | null
  pendingRequests: number
  toggleAgent: () => void
  resetAgent: () => void
}

const AIAgentContext = createContext<AIAgentContextType>({
  isAgentActive: true,
  agentName: "HealthData Guardian Agent",
  lastActivity: null,
  pendingRequests: 0,
  toggleAgent: () => {},
  resetAgent: () => {},
})

export function AIAgentProvider({ children }: { children: ReactNode }) {
  const [isAgentActive, setIsAgentActive] = useState(true)
  const [agentName, setAgentName] = useState("HealthData Guardian Agent")
  const [lastActivity, setLastActivity] = useState<Date | null>(new Date())
  const [pendingRequests, setPendingRequests] = useState(0)

  const toggleAgent = () => {
    setIsAgentActive(!isAgentActive)
  }

  const resetAgent = () => {
    setIsAgentActive(true)
    setAgentName("HealthData Guardian Agent")
    setLastActivity(new Date())
    setPendingRequests(0)
  }

  return (
    <AIAgentContext.Provider
      value={{
        isAgentActive,
        agentName,
        lastActivity,
        pendingRequests,
        toggleAgent,
        resetAgent,
      }}
    >
      {children}
    </AIAgentContext.Provider>
  )
}

export const useAIAgent = () => useContext(AIAgentContext)
