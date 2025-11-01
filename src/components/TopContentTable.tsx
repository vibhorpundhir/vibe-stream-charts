import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";
import { topContent, formatNumber } from "@/lib/mockData";

const TopContentTable = () => {
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Netflix":
        return "bg-netflix/20 text-netflix border-netflix/50";
      case "Prime Video":
        return "bg-prime/20 text-prime border-prime/50";
      case "Hotstar":
        return "bg-hotstar/20 text-hotstar border-hotstar/50";
      default:
        return "bg-primary/20 text-primary border-primary/50";
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-chart-1" />
          Top Trending Content
        </CardTitle>
        <CardDescription>Most viewed titles across all platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topContent.map((content, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{content.title}</h4>
                  <Badge variant="outline" className={getPlatformColor(content.platform)}>
                    {content.platform}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-right">
                  <p className="text-muted-foreground">Views</p>
                  <p className="font-bold text-chart-1">{formatNumber(content.views)}</p>
                </div>
                <div className="flex items-center gap-1 bg-chart-4/20 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
                  <span className="font-bold text-chart-4">{content.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopContentTable;
