import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { monthlyChangeData, PlatformName, getPlatformTheme } from "@/lib/mockData";

interface MonthlyChangeChartProps {
  platform: PlatformName;
}

const MonthlyChangeChart = ({ platform }: MonthlyChangeChartProps) => {
  const filteredData = monthlyChangeData.filter((item) => item.platform === platform);
  const theme = getPlatformTheme(platform);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-slide-up">
      <CardHeader>
        <CardTitle className="text-xl">Monthly Subscriber Growth</CardTitle>
        <CardDescription>Subscriber count (M) and monthly change (%)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis
              yAxisId="left"
              stroke="hsl(var(--muted-foreground))"
              label={{ value: "Subscribers (M)", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="hsl(var(--muted-foreground))"
              label={{ value: "Change (%)", angle: 90, position: "insideRight" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="subscribers"
              fill={theme.primary}
              radius={[8, 8, 0, 0]}
              name="Subscribers (M)"
              animationDuration={1000}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="change"
              stroke="hsl(var(--chart-4))"
              strokeWidth={3}
              name="Monthly Change (%)"
              dot={{ fill: "hsl(var(--chart-4))", r: 5 }}
              animationDuration={1000}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyChangeChart;
