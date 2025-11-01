import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { growthData, PlatformName } from "@/lib/mockData";

interface GrowthTrendsChartProps {
  selectedPlatform?: PlatformName;
}

const GrowthTrendsChart = ({ selectedPlatform = "All" }: GrowthTrendsChartProps) => {
  if (selectedPlatform !== "All") return null;
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Subscriber Growth Trends</CardTitle>
        <CardDescription>Year-over-year subscriber growth (in millions)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="netflix"
              stroke="hsl(0 100% 50%)"
              strokeWidth={3}
              name="Netflix"
              dot={{ fill: "hsl(0 100% 50%)", r: 4 }}
              animationDuration={1000}
            />
            <Line
              type="monotone"
              dataKey="prime"
              stroke="hsl(195 100% 45%)"
              strokeWidth={3}
              name="Prime Video"
              dot={{ fill: "hsl(195 100% 45%)", r: 4 }}
              animationDuration={1000}
            />
            <Line
              type="monotone"
              dataKey="hotstar"
              stroke="hsl(210 100% 50%)"
              strokeWidth={3}
              name="Hotstar"
              dot={{ fill: "hsl(210 100% 50%)", r: 4 }}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GrowthTrendsChart;
