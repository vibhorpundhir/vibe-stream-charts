import { Play, Film, Tv } from "lucide-react";
import { PlatformName, getPlatformTheme } from "@/lib/mockData";

interface PlatformHeaderProps {
  platform: PlatformName;
}

export const PlatformHeader = ({ platform }: PlatformHeaderProps) => {
  if (platform === "All") return null;

  const theme = getPlatformTheme(platform);
  
  const getIcon = () => {
    switch (platform) {
      case "Netflix":
        return Play;
      case "Prime Video":
        return Film;
      case "Hotstar":
        return Tv;
      default:
        return Tv;
    }
  };

  const Icon = getIcon();

  return (
    <div 
      className="mb-8 p-8 rounded-2xl border border-border relative overflow-hidden animate-fade-in"
      style={{ background: theme.gradient }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      <div className="relative z-10 flex items-center gap-4">
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">{platform}</h2>
          <p className="text-white/80 text-lg">Detailed Platform Analytics</p>
        </div>
      </div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
    </div>
  );
};
