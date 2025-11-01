import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { platformData, PlatformName } from "@/lib/mockData";

interface MarketShareChartProps {
  selectedPlatform?: PlatformName;
}

const MarketShareChart = ({ selectedPlatform = "All" }: MarketShareChartProps) => {
  if (selectedPlatform !== "All") return null;
  
  const data = platformData.map((platform) => ({
    name: platform.name,
    value: platform.subscribers,
    color: platform.color,
  }));

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Market Share by Subscribers</CardTitle>
        <CardDescription>Distribution of total subscribers across platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${(value / 1000000).toFixed(1)}M subscribers`}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MarketShareChart;
