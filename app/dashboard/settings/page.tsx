"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Shield, Bell, Wallet, Lock, Key, CreditCard, Save } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [defaultLicenseFee, setDefaultLicenseFee] = useState(100)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="profile" className="rounded-md">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="licensing" className="rounded-md">
            <Shield className="h-4 w-4 mr-2" />
            Licensing
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-md">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="payment" className="rounded-md">
            <Wallet className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-md">
            <Lock className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Sarah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Johnson" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="sarah.johnson@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  defaultValue="Medical researcher with a focus on cardiovascular health. Sharing my medical data to advance research in heart disease prevention and treatment."
                />
                <p className="text-sm text-muted-foreground">
                  Brief description visible to researchers who license your data.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="licensing">
          <Card>
            <CardHeader>
              <CardTitle>Default Licensing Terms</CardTitle>
              <CardDescription>Set your default preferences for data licensing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="licenseFee">Default License Fee (₹)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="licenseFee"
                    min={0}
                    max={1000}
                    step={10}
                    value={[defaultLicenseFee]}
                    onValueChange={(value) => setDefaultLicenseFee(value[0])}
                    className="flex-1"
                  />
                  <span className="w-16 text-right font-medium">₹{defaultLicenseFee}</span>
                </div>
                <p className="text-sm text-muted-foreground">Default fee per use of your data</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="allowCommercial">Allow Commercial Use</Label>
                    <p className="text-sm text-muted-foreground">Allow your data to be used for commercial purposes</p>
                  </div>
                  <Switch id="allowCommercial" defaultChecked={false} />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="requireAttribution">Require Attribution</Label>
                    <p className="text-sm text-muted-foreground">Require researchers to credit you in publications</p>
                  </div>
                  <Switch id="requireAttribution" defaultChecked={true} />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="allowRedistribution">Allow Redistribution</Label>
                    <p className="text-sm text-muted-foreground">Allow researchers to share your data with others</p>
                  </div>
                  <Switch id="allowRedistribution" defaultChecked={false} />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoApprove">Auto-Approve Licenses</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically approve license requests that meet your terms
                    </p>
                  </div>
                  <Switch id="autoApprove" defaultChecked={true} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customTerms">Default Custom Terms</Label>
                <Textarea
                  id="customTerms"
                  rows={4}
                  defaultValue="Data must be used for medical research purposes only. Any publications resulting from the use of this data must acknowledge the original data provider."
                />
                <p className="text-sm text-muted-foreground">
                  Additional terms that will be included in all your license agreements
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>License Requests</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when someone requests to license your data
                      </p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Data Access</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when your data is accessed</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Payments</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications about payments and earnings</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Platform Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about platform updates and new features
                      </p>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">AI Agent Notifications</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Agent Actions</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about actions taken by your AI agent
                      </p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Negotiation Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications about license negotiations</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Manage your payment methods and withdrawal preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Methods</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Bank Account</p>
                        <p className="text-sm text-muted-foreground">HDFC Bank •••• 4567</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Withdrawal Settings</h3>
                <div className="space-y-2">
                  <Label htmlFor="withdrawalThreshold">Automatic Withdrawal Threshold</Label>
                  <Select defaultValue="500">
                    <SelectTrigger id="withdrawalThreshold" className="w-full">
                      <SelectValue placeholder="Select threshold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">₹100</SelectItem>
                      <SelectItem value="500">₹500</SelectItem>
                      <SelectItem value="1000">₹1,000</SelectItem>
                      <SelectItem value="5000">₹5,000</SelectItem>
                      <SelectItem value="manual">Manual withdrawals only</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Automatically withdraw earnings when they reach this amount
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="withdrawalFrequency">Withdrawal Frequency</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger id="withdrawalFrequency" className="w-full">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="manual">Manual withdrawals only</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">How often you want to receive your earnings</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Button>
                  <Key className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label>Enable 2FA</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
                <Button variant="outline">
                  <Key className="h-4 w-4 mr-2" />
                  Configure 2FA
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Privacy Settings</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Profile Visibility</Label>
                      <p className="text-sm text-muted-foreground">Make your profile visible to researchers</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Data Anonymization</Label>
                      <p className="text-sm text-muted-foreground">Automatically anonymize all your uploaded data</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
