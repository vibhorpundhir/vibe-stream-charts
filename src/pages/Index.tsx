import { Header } from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import MarketShareChart from "@/components/MarketShareChart";
import GrowthTrendsChart from "@/components/GrowthTrendsChart";
import PlatformComparisonChart from "@/components/PlatformComparisonChart";
import TopContentTable from "@/components/TopContentTable";
import EngagementHeatmap from "@/components/EngagementHeatmap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MarketShareChart />
          <GrowthTrendsChart />
        </div>

        <div className="mb-6">
          <PlatformComparisonChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopContentTable />
          <EngagementHeatmap />
        </div>
      </main>
    </div>
  );
};

export default Index;
