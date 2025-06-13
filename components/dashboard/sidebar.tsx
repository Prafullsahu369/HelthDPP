"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Upload,
  FileText,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Shield,
  Database,
  Search,
  MessageSquare,
} from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Upload Data",
      icon: Upload,
      href: "/dashboard/upload",
      active: pathname === "/dashboard/upload",
    },
    {
      label: "My Data",
      icon: Database,
      href: "/dashboard/my-data",
      active: pathname === "/dashboard/my-data",
    },
    {
      label: "Discover",
      icon: Search,
      href: "/dashboard/discover",
      active: pathname === "/dashboard/discover",
    },
    {
      label: "Licenses",
      icon: FileText,
      href: "/dashboard/licenses",
      active: pathname === "/dashboard/licenses",
    },
    {
      label: "Earnings",
      icon: BarChart2,
      href: "/dashboard/earnings",
      active: pathname === "/dashboard/earnings",
    },
    {
      label: "AI Agent",
      icon: MessageSquare,
      href: "/dashboard/ai-agent",
      active: pathname === "/dashboard/ai-agent",
    },
  ]

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex h-14 items-center border-b px-2">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg">HealthData Guardian</span>
          </Link>
        </div>
        <div className="flex-1 py-4">
          <nav className="grid gap-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <route.icon className={cn("h-5 w-5", route.active ? "text-primary" : "text-muted-foreground")} />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t pt-4">
          <nav className="grid gap-1">
            <Link
              href="/dashboard/settings"
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                pathname === "/dashboard/settings" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <Settings
                className={cn("h-5 w-5", pathname === "/dashboard/settings" ? "text-primary" : "text-muted-foreground")}
              />
              Settings
            </Link>
            <Link
              href="/dashboard/help"
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                pathname === "/dashboard/help" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <HelpCircle
                className={cn("h-5 w-5", pathname === "/dashboard/help" ? "text-primary" : "text-muted-foreground")}
              />
              Help & Support
            </Link>
          </nav>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Sarah Johnson</span>
                <span className="text-xs text-muted-foreground">sarah.j@example.com</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
