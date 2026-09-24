import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, radius, spacing } from "../theme";
import { ScreenKey } from "../../App";

// The reference design only shows 4 tabs (Home / Merchants / Banking / Account),
// so Target and Send Money are reached from within a screen (see HomeScreen and
// AccountsScreen) rather than getting their own tab.
const TABS: { key: ScreenKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: "home", label: "Home", icon: "home-outline" },
  { key: "transactions", label: "Merchants", icon: "storefront-outline" },
  { key: "accounts", label: "Banking", icon: "business-outline" },
  { key: "profile", label: "Account", icon: "person-outline" },
];

export default function BottomNav({
  active,
  onNavigate,
}: {
  active: ScreenKey;
  onNavigate: (screen: ScreenKey) => void;
}) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onNavigate(tab.key)}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
          >
            <Ionicons name={tab.icon} size={20} color={isActive ? colors.primary : colors.textSecondary} />
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    marginHorizontal: spacing.xs,
  },
  tab: { alignItems: "center", gap: 2 },
  label: { fontSize: 9, color: colors.textSecondary, marginTop: 2 },
  labelActive: { color: colors.primary, fontWeight: "500" },
});
