"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

interface EarningsChartProps {
  period: string
}

export function EarningsChart({ period }: EarningsChartProps) {
  // Generate data based on the selected period
  const generateData = () => {
    switch (period) {
      case "month":
        return Array.from({ length: 30 }, (_, i) => ({
          date: `Day ${i + 1}`,
          earnings: Math.floor(Math.random() * 100) + 20,
        }))
      case "quarter":
        return Array.from({ length: 12 }, (_, i) => ({
          date: `Week ${i + 1}`,
          earnings: Math.floor(Math.random() * 300) + 100,
        }))
      case "year":
        return [
          { date: "Jan", earnings: 450 },
          { date: "Feb", earnings: 620 },
          { date: "Mar", earnings: 580 },
          { date: "Apr", earnings: 750 },
          { date: "May", earnings: 820 },
          { date: "Jun", earnings: 950 },
          { date: "Jul", earnings: 1020 },
          { date: "Aug", earnings: 1150 },
          { date: "Sep", earnings: 1300 },
          { date: "Oct", earnings: 1450 },
          { date: "Nov", earnings: 1600 },
          { date: "Dec", earnings: 1850 },
        ]
      case "all":
        return Array.from({ length: 24 }, (_, i) => ({
          date: `Month ${i + 1}`,
          earnings: Math.floor(Math.random() * 1000) + 500,
        }))
      default:
        return []
    }
  }

  const data = generateData()

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#888888" opacity={0.2} />
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `₹${value}`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Date</span>
                        <span className="font-bold text-muted-foreground">{payload[0].payload.date}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Earnings</span>
                        <span className="font-bold">₹{payload[0].value}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
