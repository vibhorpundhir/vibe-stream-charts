import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { platformData } from "@/lib/mockData";

const PlatformComparisonChart = () => {
  const data = platformData.map((platform) => ({
    name: platform.name,
    Revenue: platform.revenue / 1000000000,
    Catalog: platform.catalogSize,
    "Watch Time": platform.watchTimeHours / 1000000000,
  }));

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Platform Comparison</CardTitle>
        <CardDescription>Revenue (B$), Catalog Size, Watch Time (B hours)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar
              dataKey="Revenue"
              fill="hsl(var(--chart-1))"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
            <Bar
              dataKey="Catalog"
              fill="hsl(var(--chart-2))"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
            <Bar
              dataKey="Watch Time"
              fill="hsl(var(--chart-3))"
              radius={[8, 8, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PlatformComparisonChart;
