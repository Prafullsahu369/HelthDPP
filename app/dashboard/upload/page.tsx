"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { FileUploader } from "@/components/dashboard/file-uploader"
import { Shield, Upload, Bot, Lock, Check } from "lucide-react"

export default function UploadPage() {
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dataType: "",
    file: null as File | null,
    licenseFee: 100,
    allowCommercial: false,
    requireAttribution: true,
    allowRedistribution: false,
    customTerms: "",
  })

  const handleFileChange = (file: File | null) => {
    setFormData({
      ...formData,
      file,
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      dataType: value,
    })
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    })
  }

  const handleSliderChange = (value: number[]) => {
    setFormData({
      ...formData,
      licenseFee: value[0],
    })
  }

  const simulateProgress = () => {
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 5
      })
    }, 300)

    return interval
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.file || !formData.title || !formData.description || !formData.dataType) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and upload a file.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)
    setCurrentStep(1)
    const progressInterval = simulateProgress()

    try {
      // Simulate the upload process
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setCurrentStep(2)
      setUploadProgress(60)

      await new Promise((resolve) => setTimeout(resolve, 1500))
      setCurrentStep(3)
      setUploadProgress(80)

      await new Promise((resolve) => setTimeout(resolve, 1500))
      setCurrentStep(4)
      setUploadProgress(100)

      toast({
        title: "Upload successful!",
        description: "Your medical data has been uploaded, encrypted, and registered as IP.",
      })

      // Wait a moment before resetting
      setTimeout(() => {
        setIsUploading(false)
        setUploadProgress(0)
        setCurrentStep(0)
        setFormData({
          ...formData,
          title: "",
          description: "",
          dataType: "",
          file: null,
        })
      }, 2000)
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Upload failed",
        description: "There was an error uploading your data. Please try again.",
        variant: "destructive",
      })
      setIsUploading(false)
    } finally {
      clearInterval(progressInterval)
    }
  }

  const steps = [
    { title: "Fill Form", icon: Upload },
    { title: "Encrypt & Upload", icon: Lock },
    { title: "Register IP", icon: Shield },
    { title: "Configure AI", icon: Bot },
    { title: "Complete", icon: Check },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 gradient-text">Upload Medical Data</h1>

      {isUploading ? (
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle>Processing Your Data</CardTitle>
            <CardDescription>
              Your data is being encrypted, uploaded to IPFS, and registered with Story Protocol
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <Progress value={uploadProgress} className="h-2 w-full" />

            <div className="flex justify-between">
              {steps.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center ${
                      index <= currentStep ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`rounded-full p-2 ${index <= currentStep ? "bg-primary/10" : "bg-muted"} mb-2 ${
                        index === currentStep ? "glow-primary" : ""
                      }`}
                    >
                      {index === currentStep ? (
                        <div className="h-5 w-5 animate-pulse-slow">
                          <StepIcon className="h-5 w-5" />
                        </div>
                      ) : (
                        <StepIcon className="h-5 w-5" />
                      )}
                    </div>
                    <span className="text-xs">{step.title}</span>
                  </div>
                )
              })}
            </div>

            <div className="text-center text-sm text-muted-foreground">
              {currentStep === 0 && "Preparing your data..."}
              {currentStep === 1 && "Encrypting and uploading your file to IPFS..."}
              {currentStep === 2 && "Registering your data as intellectual property on Story Protocol..."}
              {currentStep === 3 && "Configuring your AI agent for automated licensing..."}
              {currentStep === 4 && "Upload complete! Your data is now protected and ready for licensing."}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle>Register Your Medical Data as IP</CardTitle>
            <CardDescription>
              Your data will be automatically encrypted, registered as intellectual property using Story Protocol, and
              your AI agent will be configured to handle licensing requests.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Blood Test Results - January 2023"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your medical data, including relevant details about when and where it was collected"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataType">Data Type</Label>
                <Select value={formData.dataType} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select data type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blood">Blood Test</SelectItem>
                    <SelectItem value="dna">DNA/Genetic Data</SelectItem>
                    <SelectItem value="imaging">Medical Imaging</SelectItem>
                    <SelectItem value="vitals">Vital Signs</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Upload File</Label>
                <FileUploader onFileChange={handleFileChange} />
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-medium">License Terms</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how your data can be licensed. Your AI agent will use these settings to negotiate on your
                  behalf.
                </p>

                <div className="space-y-2">
                  <Label htmlFor="licenseFee">License Fee (₹)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      id="licenseFee"
                      min={0}
                      max={1000}
                      step={10}
                      value={[formData.licenseFee]}
                      onValueChange={handleSliderChange}
                      className="flex-1"
                    />
                    <span className="w-16 text-right font-medium">₹{formData.licenseFee}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Fee per use of your data</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="allowCommercial">Allow Commercial Use</Label>
                    <Switch
                      id="allowCommercial"
                      checked={formData.allowCommercial}
                      onCheckedChange={(checked) => handleSwitchChange("allowCommercial", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="requireAttribution">Require Attribution</Label>
                    <Switch
                      id="requireAttribution"
                      checked={formData.requireAttribution}
                      onCheckedChange={(checked) => handleSwitchChange("requireAttribution", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="allowRedistribution">Allow Redistribution</Label>
                    <Switch
                      id="allowRedistribution"
                      checked={formData.allowRedistribution}
                      onCheckedChange={(checked) => handleSwitchChange("allowRedistribution", checked)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customTerms">Custom Terms (Optional)</Label>
                  <Textarea
                    id="customTerms"
                    name="customTerms"
                    placeholder="Add any additional licensing terms or restrictions"
                    value={formData.customTerms}
                    onChange={handleInputChange}
                    rows={3}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isUploading} className="w-full rounded-lg">
                <Upload className="mr-2 h-4 w-4" />
                Upload & Register IP
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  )
}
