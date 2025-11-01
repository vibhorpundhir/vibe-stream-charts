import { Button } from "@/components/ui/button";
import { Tv, Play, Film } from "lucide-react";
import { PlatformName } from "@/lib/mockData";

interface PlatformSelectorProps {
  selectedPlatform: PlatformName;
  onSelectPlatform: (platform: PlatformName) => void;
}

export const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: PlatformSelectorProps) => {
  const platforms: { name: PlatformName; icon: typeof Tv; color: string }[] = [
    { name: "All", icon: Tv, color: "primary" },
    { name: "Netflix", icon: Play, color: "netflix" },
    { name: "Prime Video", icon: Film, color: "prime" },
    { name: "Hotstar", icon: Tv, color: "hotstar" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mr-4">
        <Tv className="w-4 h-4" />
        <span>View:</span>
      </div>
      {platforms.map((platform) => {
        const Icon = platform.icon;
        const isSelected = selectedPlatform === platform.name;
        
        return (
          <Button
            key={platform.name}
            onClick={() => onSelectPlatform(platform.name)}
            variant={isSelected ? "default" : "outline"}
            className={`
              transition-all duration-300 gap-2
              ${isSelected 
                ? platform.name === "All" 
                  ? "bg-gradient-primary text-primary-foreground" 
                  : `bg-${platform.color} text-white hover:bg-${platform.color}/90`
                : "hover:border-primary/50"
              }
            `}
            style={
              isSelected && platform.name !== "All"
                ? {
                    backgroundColor: `var(--${platform.color})`,
                  }
                : undefined
            }
          >
            <Icon className="w-4 h-4" />
            {platform.name}
          </Button>
        );
      })}
    </div>
  );
};
