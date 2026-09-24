import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../theme";

type StatCardProps = {
  label: string;
  sublabel?: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconBg?: string;
  iconColor?: string;
};

export default function StatCard({
  label,
  sublabel,
  icon,
  iconBg = colors.accentBg,
  iconColor = colors.primaryDark,
}: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={16} color={iconColor} />
      </View>
      <Text style={styles.label}>{label}</Text>
      {sublabel ? <Text style={styles.sublabel}>{sublabel}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  label: { fontSize: 12, fontWeight: "500", color: colors.textPrimary },
  sublabel: { fontSize: 10, color: colors.textSecondary, marginTop: 2 },
});
