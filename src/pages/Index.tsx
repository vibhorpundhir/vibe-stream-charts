import { useState } from "react";
import { Header } from "@/components/Header";
import { PlatformSelector } from "@/components/PlatformSelector";
import { PlatformHeader } from "@/components/PlatformHeader";
import StatsCards from "@/components/StatsCards";
import MarketShareChart from "@/components/MarketShareChart";
import GrowthTrendsChart from "@/components/GrowthTrendsChart";
import PlatformComparisonChart from "@/components/PlatformComparisonChart";
import TopContentTable from "@/components/TopContentTable";
import EngagementHeatmap from "@/components/EngagementHeatmap";
import GenrePerformanceChart from "@/components/GenrePerformanceChart";
import MonthlyChangeChart from "@/components/MonthlyChangeChart";
import { PlatformName } from "@/lib/mockData";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformName>("All");

  const showIndividualView = selectedPlatform !== "All";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PlatformSelector 
          selectedPlatform={selectedPlatform} 
          onSelectPlatform={setSelectedPlatform}
        />

        <PlatformHeader platform={selectedPlatform} />

        <div className="transition-all duration-500">
          <StatsCards selectedPlatform={selectedPlatform} />
          
          {showIndividualView ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <GenrePerformanceChart platform={selectedPlatform} />
                <MonthlyChangeChart platform={selectedPlatform} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopContentTable selectedPlatform={selectedPlatform} />
                <EngagementHeatmap selectedPlatform={selectedPlatform} />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <MarketShareChart selectedPlatform={selectedPlatform} />
                <GrowthTrendsChart selectedPlatform={selectedPlatform} />
              </div>

              <div className="mb-6">
                <PlatformComparisonChart selectedPlatform={selectedPlatform} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopContentTable selectedPlatform={selectedPlatform} />
                <EngagementHeatmap selectedPlatform={selectedPlatform} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
