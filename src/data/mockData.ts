// All static mock data lives here. Swap any of this for a real fetch
// (Supabase, REST, whatever) once the backend is ready — every screen
// imports from this one file, so that's the only place you'll need to touch.

export const profile = {
  name: "Maya Rodriguez",
  email: "maya@example.com",
  initials: "MR",
};

export const spendChart = [1200, 1350, 1180, 1458.9, 1300, 1420]; // last 6 months

export const homeStats = {
  totalSpend: 1458.9,
  income: 1537.86,
  expense: 937.86,
  combinedBill: 17262.0,
  upcomingBills: 4262.0,
};

export const accounts = [
  { id: "ab", name: "AB Bank", balance: 7262.0, icon: "wallet-outline" as const },
  { id: "fillo", name: "Fillo", balance: 7262.0, icon: "card-outline" as const },
];

export const target = {
  goalLabel: "$4,560 target",
  daysLeft: 5,
  dailyTarget: 200,
  percentLeft: 92,
  savedThisMonth: 178.0,
  totalGoal: 4568,
  leftToGo: 568,
  savedBonusNote: "You saved $1200 this month",
  streakWeeks: 3,
};

export type Transaction = {
  id: string;
  name: string;
  category: string;
  amount: number; // positive = income, negative = expense
  icon: "musical-notes-outline" | "person-circle-outline" | "flash-outline" | "briefcase-outline";
  group: "Today" | "Yesterday" | "This week";
};

export const transactions: Transaction[] = [
  { id: "1", name: "Spotify", category: "Subscription", amount: -14.95, icon: "musical-notes-outline", group: "Today" },
  { id: "2", name: "William Jane", category: "AB Bank", amount: 120.0, icon: "person-circle-outline", group: "Today" },
  { id: "3", name: "Electric bill", category: "Utilities", amount: -68.4, icon: "flash-outline", group: "Yesterday" },
  { id: "4", name: "Freelance payment", category: "Income", amount: 480.0, icon: "briefcase-outline", group: "This week" },
];

export const recipients = [
  { id: "mr", name: "Maya Rodriguez", accountLast4: "4261", initials: "MR" },
];
