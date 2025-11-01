import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { engagementData } from "@/lib/mockData";

const EngagementHeatmap = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [0, 6, 12, 18, 21];

  const getColorIntensity = (value: number) => {
    if (value >= 100) return "bg-chart-1";
    if (value >= 80) return "bg-chart-2";
    if (value >= 60) return "bg-chart-3";
    if (value >= 40) return "bg-chart-4";
    return "bg-muted";
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Weekly Engagement Heatmap</CardTitle>
        <CardDescription>User activity patterns by day and time (relative scale)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex gap-2 mb-4">
            <div className="w-12"></div>
            {hours.map((hour) => (
              <div key={hour} className="flex-1 text-center text-xs text-muted-foreground">
                {hour}:00
              </div>
            ))}
          </div>
          {days.map((day) => (
            <div key={day} className="flex gap-2 items-center">
              <div className="w-12 text-sm font-medium text-muted-foreground">{day}</div>
              {hours.map((hour) => {
                const dataPoint = engagementData.find((d) => d.day === day && d.hour === hour);
                const value = dataPoint?.value || 0;
                return (
                  <div
                    key={`${day}-${hour}`}
                    className={`flex-1 h-12 rounded-lg ${getColorIntensity(value)} transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer relative group`}
                    title={`${day} ${hour}:00 - ${value}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold text-background">{value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-6 text-xs">
          <span className="text-muted-foreground">Low</span>
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded bg-muted"></div>
            <div className="w-6 h-6 rounded bg-chart-4"></div>
            <div className="w-6 h-6 rounded bg-chart-3"></div>
            <div className="w-6 h-6 rounded bg-chart-2"></div>
            <div className="w-6 h-6 rounded bg-chart-1"></div>
          </div>
          <span className="text-muted-foreground">High</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementHeatmap;
