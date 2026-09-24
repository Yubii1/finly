// Design tokens pulled from the Behance reference — every screen and component
// reads from here so the look stays consistent as the app grows.

export const colors = {
  background: "#F5F5F8",
  card: "#FFFFFF",
  primary: "#4F46E5",
  primaryDark: "#3730A3",
  textPrimary: "#111111",
  textSecondary: "#888888",
  border: "#EEEEEE",
  success: "#0F6E56",
  successBg: "#E1F5EE",
  danger: "#993C1D",
  dangerBg: "#FAECE7",
  logoutRed: "#D85A30",
  accentBg: "#EEEDFE",
  track: "#E9E8F5", // unfilled progress track
};

export const spacing = { xs: 4, sm: 8, md: 20, lg: 16, xl: 24 };
export const radius = { card: 14, pill: 20, avatar: 999 };

export const typography = {
  screenTitle: { fontSize: 19, fontWeight: "500" as const, color: colors.textPrimary },
  sectionTitle: { fontSize: 13, fontWeight: "500" as const, color: colors.textSecondary },
  heroAmount: { fontSize: 34, fontWeight: "500" as const, color: colors.textPrimary },
  cardTitle: { fontSize: 13, fontWeight: "500" as const, color: colors.textPrimary },
  cardSubtitle: { fontSize: 11, color: colors.textSecondary },
  label: { fontSize: 11, color: colors.textSecondary },
};
