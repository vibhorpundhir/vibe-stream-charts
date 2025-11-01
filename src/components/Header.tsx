import { TrendingUp } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              DataFlix
            </h1>
            <p className="text-xs text-muted-foreground">Real-time Analytics Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-primary rounded-full animate-glow"></div>
            <span className="text-sm text-muted-foreground">Live</span>
          </div>
        </div>
      </div>
    </header>
  );
};
