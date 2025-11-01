// Mock data for streaming platforms analytics
export type PlatformName = "Netflix" | "Prime Video" | "Hotstar" | "All";

export interface PlatformData {
  name: PlatformName;
  subscribers: number;
  revenue: number;
  catalogSize: number;
  watchTimeHours: number;
  color: string;
  logo?: string;
}

export interface GenreData {
  genre: string;
  views: number;
  platform: PlatformName;
}

export interface MonthlyChange {
  month: string;
  subscribers: number;
  change: number;
  platform: PlatformName;
}

export interface GrowthData {
  month: string;
  netflix: number;
  prime: number;
  hotstar: number;
}

export interface TopContent {
  title: string;
  platform: string;
  views: number;
  rating: number;
}

export interface EngagementData {
  day: string;
  hour: number;
  value: number;
}

export const platformData: PlatformData[] = [
  {
    name: "Netflix",
    subscribers: 238000000,
    revenue: 31500000000,
    catalogSize: 15000,
    watchTimeHours: 164000000000,
    color: "hsl(0 100% 50%)",
  },
  {
    name: "Prime Video",
    subscribers: 200000000,
    revenue: 28000000000,
    catalogSize: 24000,
    watchTimeHours: 142000000000,
    color: "hsl(195 100% 45%)",
  },
  {
    name: "Hotstar",
    subscribers: 150000000,
    revenue: 12000000000,
    catalogSize: 18000,
    watchTimeHours: 98000000000,
    color: "hsl(210 100% 50%)",
  },
];

export const growthData: GrowthData[] = [
  { month: "Jan", netflix: 230, prime: 185, hotstar: 140 },
  { month: "Feb", netflix: 232, prime: 190, hotstar: 142 },
  { month: "Mar", netflix: 234, prime: 192, hotstar: 144 },
  { month: "Apr", netflix: 235, prime: 195, hotstar: 145 },
  { month: "May", netflix: 236, prime: 197, hotstar: 147 },
  { month: "Jun", netflix: 238, prime: 200, hotstar: 150 },
];

export const topContent: TopContent[] = [
  { title: "Stranger Things S5", platform: "Netflix", views: 142000000, rating: 9.2 },
  { title: "The Lord of the Rings: Rings of Power", platform: "Prime Video", views: 125000000, rating: 8.7 },
  { title: "Indian Idol 2025", platform: "Hotstar", views: 98000000, rating: 8.9 },
  { title: "Wednesday S2", platform: "Netflix", views: 135000000, rating: 9.0 },
  { title: "Citadel S2", platform: "Prime Video", views: 115000000, rating: 8.5 },
  { title: "IPL 2025", platform: "Hotstar", views: 180000000, rating: 9.5 },
  { title: "The Crown Final Season", platform: "Netflix", views: 108000000, rating: 8.8 },
  { title: "Jack Ryan S4", platform: "Prime Video", views: 95000000, rating: 8.6 },
];

export const engagementData: EngagementData[] = [
  // Monday
  { day: "Mon", hour: 0, value: 45 },
  { day: "Mon", hour: 6, value: 35 },
  { day: "Mon", hour: 12, value: 55 },
  { day: "Mon", hour: 18, value: 85 },
  { day: "Mon", hour: 21, value: 95 },
  // Tuesday
  { day: "Tue", hour: 0, value: 50 },
  { day: "Tue", hour: 6, value: 38 },
  { day: "Tue", hour: 12, value: 58 },
  { day: "Tue", hour: 18, value: 82 },
  { day: "Tue", hour: 21, value: 92 },
  // Wednesday
  { day: "Wed", hour: 0, value: 48 },
  { day: "Wed", hour: 6, value: 40 },
  { day: "Wed", hour: 12, value: 60 },
  { day: "Wed", hour: 18, value: 88 },
  { day: "Wed", hour: 21, value: 98 },
  // Thursday
  { day: "Thu", hour: 0, value: 52 },
  { day: "Thu", hour: 6, value: 42 },
  { day: "Thu", hour: 12, value: 62 },
  { day: "Thu", hour: 18, value: 90 },
  { day: "Thu", hour: 21, value: 100 },
  // Friday
  { day: "Fri", hour: 0, value: 65 },
  { day: "Fri", hour: 6, value: 45 },
  { day: "Fri", hour: 12, value: 70 },
  { day: "Fri", hour: 18, value: 95 },
  { day: "Fri", hour: 21, value: 110 },
  // Saturday
  { day: "Sat", hour: 0, value: 75 },
  { day: "Sat", hour: 6, value: 60 },
  { day: "Sat", hour: 12, value: 85 },
  { day: "Sat", hour: 18, value: 105 },
  { day: "Sat", hour: 21, value: 120 },
  // Sunday
  { day: "Sun", hour: 0, value: 70 },
  { day: "Sun", hour: 6, value: 55 },
  { day: "Sun", hour: 12, value: 80 },
  { day: "Sun", hour: 18, value: 100 },
  { day: "Sun", hour: 21, value: 115 },
];

export const genreData: GenreData[] = [
  // Netflix
  { genre: "Drama", views: 45000000, platform: "Netflix" },
  { genre: "Action", views: 38000000, platform: "Netflix" },
  { genre: "Comedy", views: 32000000, platform: "Netflix" },
  { genre: "Thriller", views: 28000000, platform: "Netflix" },
  { genre: "Sci-Fi", views: 25000000, platform: "Netflix" },
  // Prime Video
  { genre: "Action", views: 42000000, platform: "Prime Video" },
  { genre: "Drama", views: 35000000, platform: "Prime Video" },
  { genre: "Comedy", views: 30000000, platform: "Prime Video" },
  { genre: "Fantasy", views: 28000000, platform: "Prime Video" },
  { genre: "Thriller", views: 22000000, platform: "Prime Video" },
  // Hotstar
  { genre: "Sports", views: 55000000, platform: "Hotstar" },
  { genre: "Drama", views: 28000000, platform: "Hotstar" },
  { genre: "Reality", views: 25000000, platform: "Hotstar" },
  { genre: "Action", views: 20000000, platform: "Hotstar" },
  { genre: "Comedy", views: 18000000, platform: "Hotstar" },
];

export const monthlyChangeData: MonthlyChange[] = [
  // Netflix
  { month: "Jan", subscribers: 230, change: 2.1, platform: "Netflix" },
  { month: "Feb", subscribers: 232, change: 0.9, platform: "Netflix" },
  { month: "Mar", subscribers: 234, change: 0.8, platform: "Netflix" },
  { month: "Apr", subscribers: 235, change: 0.4, platform: "Netflix" },
  { month: "May", subscribers: 236, change: 0.4, platform: "Netflix" },
  { month: "Jun", subscribers: 238, change: 0.8, platform: "Netflix" },
  // Prime Video
  { month: "Jan", subscribers: 185, change: 3.2, platform: "Prime Video" },
  { month: "Feb", subscribers: 190, change: 2.7, platform: "Prime Video" },
  { month: "Mar", subscribers: 192, change: 1.1, platform: "Prime Video" },
  { month: "Apr", subscribers: 195, change: 1.6, platform: "Prime Video" },
  { month: "May", subscribers: 197, change: 1.0, platform: "Prime Video" },
  { month: "Jun", subscribers: 200, change: 1.5, platform: "Prime Video" },
  // Hotstar
  { month: "Jan", subscribers: 140, change: 2.5, platform: "Hotstar" },
  { month: "Feb", subscribers: 142, change: 1.4, platform: "Hotstar" },
  { month: "Mar", subscribers: 144, change: 1.4, platform: "Hotstar" },
  { month: "Apr", subscribers: 145, change: 0.7, platform: "Hotstar" },
  { month: "May", subscribers: 147, change: 1.4, platform: "Hotstar" },
  { month: "Jun", subscribers: 150, change: 2.0, platform: "Hotstar" },
];

export const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

export const getPlatformTheme = (platform: PlatformName) => {
  switch (platform) {
    case "Netflix":
      return {
        primary: "hsl(0 100% 50%)",
        gradient: "linear-gradient(135deg, hsl(0 100% 50%), hsl(0 100% 35%))",
        name: "Netflix",
      };
    case "Prime Video":
      return {
        primary: "hsl(195 100% 45%)",
        gradient: "linear-gradient(135deg, hsl(195 100% 45%), hsl(195 100% 30%))",
        name: "Prime Video",
      };
    case "Hotstar":
      return {
        primary: "hsl(210 100% 50%)",
        gradient: "linear-gradient(135deg, hsl(210 100% 50%), hsl(210 100% 35%))",
        name: "Hotstar",
      };
    default:
      return {
        primary: "hsl(180 100% 50%)",
        gradient: "var(--gradient-primary)",
        name: "All Platforms",
      };
  }
};
