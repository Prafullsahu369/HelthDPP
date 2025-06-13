"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWallet } from "@/hooks/use-wallet"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MessageSquare, Settings, BarChart, Send, Bot, User, RefreshCw } from "lucide-react"

export default function AIAgentPage() {
  const { address } = useWallet()
  const { toast } = useToast()
  const [userRole, setUserRole] = useState<string | null>(null)
  const [messages, setMessages] = useState<{ role: string; content: string; timestamp: Date }[]>([
    {
      role: "agent",
      content: "Hello! I'm your personal AI agent. I'm here to help manage your healthcare data licensing. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [agentSettings, setAgentSettings] = useState({
    minLicenseFee: 50,
    maxLicenseFee: 500,
    preferredNegotiationStyle: "balanced",
    autoApproveUnder: 200,
    autoRejectBelow: 50,
    notifyOnNewRequests: true,
    autoRespond: true,
    customInstructions: "",
  })

  useEffect(() => {
    // In a real app, we would fetch the user role from a database or smart contract
    const storedRole = localStorage.getItem("userRole")
    if (storedRole) {
      setUserRole(storedRole)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Add user message
    const newMessages = [
      ...messages,
      {
        role: "user",
        content: inputMessage,
        timestamp: new Date(),
      },
    ]
    setMessages(newMessages)
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""
      
      if (inputMessage.toLowerCase().includes("license") && inputMessage.toLowerCase().includes("request")) {
        response = "I've received a new license request for your genomic data from MedResearch Inc. They're offering ₹150 per use for research purposes. Based on your preferences, this is within your acceptable range. Would you like me to negotiate for a higher fee or accept this offer?"
      } else if (inputMessage.toLowerCase().includes("negotiate")) {
        response = "I'll negotiate for a higher fee. I'll start by countering with ₹250 per use, highlighting the unique value of your data. I'll keep you updated on the progress. Is there anything specific you'd like me to emphasize in the negotiation?"
      } else if (inputMessage.toLowerCase().includes("settings") || inputMessage.toLowerCase().includes("configure")) {
        response = "You can configure my settings in the 'Settings' tab above. This includes your preferred license fee range, negotiation style, and automatic approval thresholds."
      } else if (inputMessage.toLowerCase().includes("how") && inputMessage.toLowerCase().includes("work")) {
        response = "I help manage your healthcare data licensing by automatically handling requests, negotiating terms based on your preferences, and executing smart contracts. I can find relevant datasets for research, negotiate fair prices, and ensure all terms are met before granting access."
      } else {
        response = "I understand. Is there anything specific about your healthcare data licensing you'd like assistance with? I can help with managing license requests, negotiating terms, or finding relevant datasets for your research."
      }

      setMessages([
        ...newMessages,
        {
          role: "agent",
          content: response,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSettingsChange = (name: string, value: any) => {
    setAgentSettings({
      ...agentSettings,
      [name]: value,
    })
  }

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your AI agent settings have been updated successfully.",
    })
  }

  const handleResetAgent = () => {
    toast({
      title: "Agent reset",
      description: "Your AI agent has been reset to default settings.",
    })
    setAgentSettings({
      minLicenseFee: 50,
      maxLicenseFee: 500,
      preferredNegotiationStyle: "balanced",
      autoApproveUnder: 200,
      autoRejectBelow: 50,
      notifyOnNewRequests: true,
      autoRespond: true,
      customInstructions: "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Agent</h1>
        <p className="text-muted-foreground">
          Your personal AI agent for managing healthcare data licensing
        </p>
      </div>

      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="activity">
            <BarChart className="h-4 w-4 mr-2" />
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card className="border-primary/10">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>AI Agent Assistant</CardTitle>
                </div>
                <Badge variant="outline" className="bg-green-500/10 text-green-500">
                  Online
                </Badge>
              </div>
              <CardDescription>
                Your personal AI agent for managing healthcare data licensing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] overflow-y-auto space-y-4 pr-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted ai-agent-message"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {message.role === "agent" ? (
                          <Bot className="h-4 w-4" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                        <span className="text-xs font-medium">
                          {message.role === "agent" ? "AI Agent" : "You"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <span className="text-xs font-medium">AI Agent</span>
                      </div>
                      <div className="flex space-x-1 mt-2">
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "600ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Settings</CardTitle>
              <CardDescription>
                Configure how your AI agent handles licensing negotiations and requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Negotiation Preferences</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>License Fee Range (₹)</Label>
                    <span className="text-sm">
                      ₹{agentSettings.minLicenseFee} - ₹{agentSettings.maxLicenseFee}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min={0}
                      max={agentSettings.maxLicenseFee}
                      value={agentSettings.minLicenseFee}
                      onChange={(e) => handleSettingsChange("minLicenseFee", Number.parseInt(e.target.value))}
                      className="w-20"
                    />
                    <Slider
                      min={0}
                      max={1000}
                      step={10}
                      value={[agentSettings.minLicenseFee, agentSettings.maxLicenseFee]}
                      onValueChange={(value) => {
                        handleSettingsChange("minLicenseFee", value[0])
                        handleSettingsChange("maxLicenseFee", value[1])
                      }}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      min={agentSettings.minLicenseFee}
                      max={1000}
                      value={agentSettings.maxLicenseFee}
                      onChange={(e) => handleSettingsChange("maxLicenseFee", Number.parseInt(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="negotiationStyle">Preferred Negotiation Style</Label>
                  <Select
                    value={agentSettings.preferredNegotiationStyle}
                    onValueChange={(value) => handleSettingsChange("preferredNegotiationStyle", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select negotiation style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aggressive">Aggressive (Maximize Fee)</SelectItem>
                      <SelectItem value="balanced">Balanced (Fair Market Value)</SelectItem>
                      <SelectItem value="accommodating">Accommodating (Prioritize Usage)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Auto-Approve Threshold (₹)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      min={0}
                      max={1000}
                      step={10}
                      value={[agentSettings.autoApproveUnder]}
                      onValueChange={(value) => handleSettingsChange("autoApproveUnder", value[0])}
                      className="flex-1"
                    />
                    <span className="w-16 text-right font-medium">₹{agentSettings.autoApproveUnder}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Automatically approve license requests above this amount
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Auto-Reject Threshold (₹)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      min={0}
                      max={500}
                      step={10}
                      value={[agentSettings.autoRejectBelow]}
                      onValueChange={(value) => handleSettingsChange("autoRejectBelow", value[0])}
                      className="flex-1"
                    />
                    <span className="w-16 text-right font-medium">₹{agentSettings.autoRejectBelow}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Automatically reject license requests below this amount
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-medium">Notification Settings</h3>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="notifyOnNewRequests">Notify on new license requests</Label>
                  <Switch
                    id="notifyOnNewRequests"
                    checked={agentSettings.notifyOnNewRequests}
                    onCheckedChange={(checked) => handleSettingsChange("notifyOnNewRequests", checked)}
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="autoRespond">Auto-respond to messages</Label>
                  <Switch
                    id="autoRespond"
                    checked={agentSettings.autoRespond}
                    onCheckedChange={(checked) => handleSettingsChange("autoRespond", checked)}
                  />
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="customInstructions">Custom Instructions (Optional)</Label>
                <Textarea
                  id="customInstructions"
                  placeholder="Add any specific instructions for your AI agent"
                  value={agentSettings.customInstructions}
                  onChange={(e) => handleSettingsChange("customInstructions", e.target.value)}
                  rows={4}
                />
                <p className="text-xs text-muted-foreground">
                  These instructions will guide how your AI agent negotiates and handles licensing requests
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleResetAgent}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset to Default
              </Button>
              <Button onClick={handleSaveSettings}>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Activity</CardTitle>
              <CardDescription>
                Recent actions taken by your AI agent on your behalf
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-green-500/10 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-500"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">License Negotiation Completed</p>
                        <p className="text-xs text-muted-foreground">Today, 10:23 AM</p>
                      </div>
                    </div>
                    <Badge>+₹200</Badge>
                  </div>
                  <p className="mt-2 text-sm">
                    Successfully negotiated a license for your genomic data with MedResearch Inc. Initial offer: ₹150,
                    Final agreement: ₹200 per use.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-blue-500/10 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-500"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">New License Request</p>
                        <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                      </div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                  <p className="mt-2 text-sm">
                    Received a license request for your blood test data from HealthAnalytics Ltd. Offering ₹180 per use
                    for research purposes.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-yellow-500/10 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">License Terms Violation</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <Badge variant="destructive">Alert</Badge>
                  </div>
                  <p className="mt-2 text-sm">
                    Detected potential license terms
                    </p>
