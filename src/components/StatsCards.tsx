import { Users, DollarSign, Film, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { platformData, formatNumber } from "@/lib/mockData";

const StatsCards = () => {
  const totalSubscribers = platformData.reduce((sum, p) => sum + p.subscribers, 0);
  const totalRevenue = platformData.reduce((sum, p) => sum + p.revenue, 0);
  const totalCatalog = platformData.reduce((sum, p) => sum + p.catalogSize, 0);
  const totalWatchTime = platformData.reduce((sum, p) => sum + p.watchTimeHours, 0);

  const stats = [
    {
      title: "Total Subscribers",
      value: formatNumber(totalSubscribers),
      icon: Users,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      title: "Total Revenue",
      value: `$${formatNumber(totalRevenue)}`,
      icon: DollarSign,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      title: "Content Library",
      value: formatNumber(totalCatalog),
      icon: Film,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      title: "Watch Time",
      value: `${formatNumber(totalWatchTime)}h`,
      icon: Clock,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
