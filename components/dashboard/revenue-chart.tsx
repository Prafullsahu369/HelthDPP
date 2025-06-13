"use client"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface RevenueChartProps {
  data: { date: string; amount: number }[]
  isLoading: boolean
}

export function RevenueChart({ data, isLoading }: RevenueChartProps) {
  // Generate placeholder data if loading or no data
  const chartData =
    isLoading || data.length === 0
      ? Array.from({ length: 12 }).map((_, i) => ({
          date: `2023-${i + 1}`,
          amount: 0,
        }))
      : data

  return (
    <div className="h-[300px] w-full">
      {isLoading ? (
        <div className="h-full w-full animate-pulse rounded bg-muted"></div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
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
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Amount</span>
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
              dataKey="amount"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "var(--chart-primary)" },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
