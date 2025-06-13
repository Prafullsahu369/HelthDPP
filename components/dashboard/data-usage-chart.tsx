"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", usage: 10 },
  { month: "Feb", usage: 15 },
  { month: "Mar", usage: 25 },
  { month: "Apr", usage: 30 },
  { month: "May", usage: 22 },
  { month: "Jun", usage: 18 },
  { month: "Jul", usage: 35 },
  { month: "Aug", usage: 42 },
  { month: "Sep", usage: 38 },
  { month: "Oct", usage: 45 },
  { month: "Nov", usage: 50 },
  { month: "Dec", usage: 55 },
]

export function DataUsageChart() {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle>Data Usage Over Time</CardTitle>
        <CardDescription>Number of times your data has been accessed by researchers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                            <span className="font-bold text-muted-foreground">{payload[0].payload.month}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Usage</span>
                            <span className="font-bold">{payload[0].value} times</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="usage" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
