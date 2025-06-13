"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, FileText, Video, Search, ArrowRight } from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">Find answers to common questions or contact our support team</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for help topics..."
          className="pl-10 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="faq" className="rounded-md">
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="contact" className="rounded-md">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Support
          </TabsTrigger>
          <TabsTrigger value="guides" className="rounded-md">
            <FileText className="h-4 w-4 mr-2" />
            User Guides
          </TabsTrigger>
          <TabsTrigger value="tutorials" className="rounded-md">
            <Video className="h-4 w-4 mr-2" />
            Video Tutorials
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to the most common questions about our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the AI agent protect my data?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our AI agent uses advanced encryption and blockchain technology to protect your data. When you
                      upload medical data, it's automatically encrypted using AES-256 encryption before being stored on
                      IPFS. The AI agent then registers your data as intellectual property on Story Protocol, creating a
                      verifiable record of ownership. All access to your data is recorded on the blockchain, creating an
                      immutable audit trail.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I earn money from my medical data?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You earn money when researchers license your data for their studies. Your AI agent automatically
                      negotiates fair terms based on your preferences, and you receive payment every time your data is
                      accessed or used. Payments are processed through smart contracts, ensuring transparency and
                      automatic royalty distribution. You can track your earnings in the Earnings Analysis section of
                      your dashboard.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What types of medical data can I upload?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can upload various types of medical data, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Blood test results</li>
                      <li>Medical imaging (X-rays, MRIs, CT scans)</li>
                      <li>Genetic/DNA data</li>
                      <li>ECG/EKG reports</li>
                      <li>Vital signs monitoring data</li>
                      <li>Allergy test results</li>
                      <li>Vaccination records</li>
                      <li>Medical history documents</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      We support various file formats including PDF, JPEG, PNG, CSV, XLSX, DOC, DOCX, DICOM, and JSON.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How does the licensing process work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">The licensing process works as follows:</p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>A researcher discovers your anonymized data through our platform</li>
                      <li>Their AI agent sends a license request to your AI agent</li>
                      <li>
                        Your AI agent negotiates terms based on your preferences (fee, usage rights, attribution, etc.)
                      </li>
                      <li>You receive a notification about the proposed license terms</li>
                      <li>
                        You can approve, reject, or ask your AI agent to continue negotiating (or set it to auto-approve
                        licenses that meet your criteria)
                      </li>
                      <li>Once approved, a smart contract is executed to formalize the license</li>
                      <li>The researcher gains access to your data and you receive payment</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Is my data secure and private?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, security and privacy are our top priorities. Your data is:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>End-to-end encrypted using AES-256 encryption</li>
                      <li>Stored on decentralized IPFS storage</li>
                      <li>Automatically anonymized to remove personal identifiers</li>
                      <li>Protected by blockchain-based access control</li>
                      <li>Only accessible to licensed researchers with proper credentials</li>
                      <li>Subject to your licensing terms and conditions</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground">
                      You maintain complete control over your data and can revoke access at any time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter the subject of your inquiry" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issue</option>
                    <option value="account">Account Management</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="licensing">Licensing Questions</option>
                    <option value="security">Security & Privacy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or question in detail"
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="attachments" className="text-sm font-medium">
                    Attachments (Optional)
                  </label>
                  <Input id="attachments" type="file" multiple />
                  <p className="text-xs text-muted-foreground">
                    You can attach screenshots or documents to help explain your issue (max 5MB per file)
                  </p>
                </div>

                <Button className="w-full">Submit Support Request</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>Learn the basics of using the platform</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Getting Started Guide"
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This comprehensive guide covers everything you need to know to get started with the HealthData
                  Licensing Guardian platform.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Uploading Medical Data</CardTitle>
                <CardDescription>Learn how to securely upload your medical data</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Uploading Medical Data"
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This guide explains the process of uploading your medical data, including supported file formats and
                  best practices.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Understanding Licensing</CardTitle>
                <CardDescription>Learn about the licensing process and terms</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Understanding Licensing"
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This guide explains how the licensing process works, including negotiation, terms, and payment
                  distribution.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Working with AI Agents</CardTitle>
                <CardDescription>Learn how to interact with your AI agent</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Working with AI Agents"
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This guide explains how to communicate with your AI agent, set preferences, and monitor its
                  activities.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tutorials">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Platform Overview</CardTitle>
                <CardDescription>A complete tour of the platform</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">5:32</p>
                <Button variant="outline" className="w-full mt-4">
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Uploading Your First Dataset</CardTitle>
                <CardDescription>Step-by-step guide to uploading data</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">3:45</p>
                <Button variant="outline" className="w-full mt-4">
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Setting License Terms</CardTitle>
                <CardDescription>How to set optimal license terms</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">4:20</p>
                <Button variant="outline" className="w-full mt-4">
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Negotiating with AI Agents</CardTitle>
                <CardDescription>How to negotiate better license terms</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">6:15</p>
                <Button variant="outline" className="w-full mt-4">
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Tracking Your Earnings</CardTitle>
                <CardDescription>How to monitor and withdraw earnings</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">3:50</p>
                <Button variant="outline" className="w-full mt-4">
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Security Best Practices</CardTitle>
                <CardDescription>How to keep your data secure</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">7:30</p>
                <Button variant="outline" className="w-full mt-4">
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
