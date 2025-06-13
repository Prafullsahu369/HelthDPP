"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, User, Microscope } from "lucide-react"

interface RoleSelectionProps {
  onRoleSelect: (role: string) => void
}

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="container flex items-center justify-center min-h-[80vh]">
      <div className="max-w-3xl w-full">
        <div className="flex flex-col items-center mb-8">
          <Leaf className="h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold text-center">
            Welcome to <span className="text-primary">HealthData Guardian</span>
          </h1>
          <p className="text-muted-foreground text-center mt-2">Select your role to continue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-primary/10 overflow-hidden">
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Patient
              </CardTitle>
              <CardDescription>Share your medical data securely and earn royalties</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-6">
                  <User className="h-12 w-12 text-primary" />
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Upload medical data securely
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Register your data as intellectual property
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Earn royalties when your data is used
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Let AI agents negotiate on your behalf
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full" onClick={() => onRoleSelect("patient")}>
                Continue as Patient
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-primary/10 overflow-hidden">
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-6 w-6 text-primary" />
                Researcher
              </CardTitle>
              <CardDescription>Discover and license patient data for your research</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-6">
                  <Microscope className="h-12 w-12 text-primary" />
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Discover relevant patient data
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  License data with transparent terms
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Get AI-powered dataset suggestions
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Automate licensing negotiations
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full" onClick={() => onRoleSelect("researcher")}>
                Continue as Researcher
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
