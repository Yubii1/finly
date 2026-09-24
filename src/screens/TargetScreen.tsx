import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProgressBar from "../components/ProgressBar";
import ProgressRing from "../components/ProgressRing";
import TopBar from "../components/TopBar";
import { colors, radius, spacing, typography } from "../theme";
import { target } from "../data/mockData";

const STATS = [
  { key: "goals", label: "Your daily goals", sublabel: "Achieved", icon: "checkmark-circle-outline" as const },
  { key: "streaks", label: "Streaks", sublabel: `${target.streakWeeks} weeks`, icon: "flame-outline" as const },
  { key: "bills", label: "Bills", sublabel: "Saved $600.00", icon: "receipt-outline" as const },
  { key: "finances", label: "Finances", sublabel: "Saved $600.00", icon: "trending-up-outline" as const },
];

export default function TargetScreen({ onBack }: { onBack: () => void }) {
  const savedPercent = (target.savedThisMonth / target.totalGoal) * 100;

  return (
    <View style={styles.screen}>
      <TopBar title="Target" onBack={onBack} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.headerCard}>
          <ProgressRing percent={target.percentLeft} size={40} strokeWidth={4} />
          <View style={{ flex: 1 }}>
            <Text style={typography.cardTitle}>
              {target.percentLeft}% left of {target.goalLabel}
            </Text>
            <Text style={typography.cardSubtitle}>
              {target.daysLeft} days left (${target.dailyTarget}/day)
            </Text>
          </View>
        </View>

        <View style={styles.progressCard}>
          <Text style={typography.label}>Total savings this month</Text>
          <Text style={styles.savedAmount}>${target.savedThisMonth.toFixed(2)}</Text>
          <Text style={styles.outOf}>out of ${target.totalGoal.toLocaleString()}</Text>
          <ProgressBar percent={savedPercent} />
          <Text style={styles.leftText}>${target.leftToGo} left</Text>
        </View>

        <View style={styles.bonusBanner}>
          <Text style={styles.bonusText}>{target.savedBonusNote}</Text>
          <View style={styles.bonusBadge}>
            <Ionicons name="flash" size={10} color="#fff" />
            <Text style={styles.bonusBadgeText}>x3</Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={typography.sectionTitle}>Your stats</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.statsGrid}>
          {STATS.map((s) => (
            <View key={s.key} style={styles.statCard}>
              <View style={styles.statIcon}>
                <Ionicons name={s.icon} size={16} color={colors.primaryDark} />
              </View>
              <Text style={typography.cardTitle}>{s.label}</Text>
              <Text style={typography.cardSubtitle}>{s.sublabel}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  scroll: { paddingBottom: spacing.md },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  progressCard: { backgroundColor: colors.card, borderRadius: radius.card, padding: spacing.md, marginBottom: spacing.sm },
  savedAmount: { fontSize: 24, fontWeight: "500", color: colors.textPrimary, marginTop: 2 },
  outOf: { fontSize: 11, color: colors.textSecondary, marginBottom: spacing.sm },
  leftText: { fontSize: 11, color: colors.textSecondary, marginTop: spacing.xs, textAlign: "right" },
  bonusBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  bonusText: { color: "#fff", fontSize: 12, fontWeight: "500", flex: 1 },
  bonusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  bonusBadgeText: { color: "#fff", fontSize: 11, fontWeight: "500" },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: spacing.sm },
  seeAll: { fontSize: 12, color: colors.primary, fontWeight: "500" },
  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  statCard: {
    width: "47%",
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
  },
  statIcon: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: colors.accentBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
});
