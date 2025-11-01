import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { genreData, PlatformName, formatNumber, getPlatformTheme } from "@/lib/mockData";

interface GenrePerformanceChartProps {
  platform: PlatformName;
}

const GenrePerformanceChart = ({ platform }: GenrePerformanceChartProps) => {
  const filteredData = genreData
    .filter((item) => item.platform === platform)
    .sort((a, b) => b.views - a.views);

  const theme = getPlatformTheme(platform);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-slide-up">
      <CardHeader>
        <CardTitle className="text-xl">Genre Performance</CardTitle>
        <CardDescription>Most watched genres on {platform}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
            <YAxis dataKey="genre" type="category" stroke="hsl(var(--muted-foreground))" width={80} />
            <Tooltip
              formatter={(value: number) => formatNumber(value)}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar
              dataKey="views"
              fill={theme.primary}
              radius={[0, 8, 8, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GenrePerformanceChart;
