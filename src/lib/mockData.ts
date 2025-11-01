// Mock data for streaming platforms analytics
export interface PlatformData {
  name: string;
  subscribers: number;
  revenue: number;
  catalogSize: number;
  watchTimeHours: number;
  color: string;
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
