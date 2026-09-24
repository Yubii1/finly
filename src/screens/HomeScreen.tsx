import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Polyline } from "react-native-svg";
import TopBar from "../components/TopBar";
import { colors, radius, spacing, typography } from "../theme";
import { homeStats, spendChart } from "../data/mockData";
import { ScreenKey } from "../../App";

const CHART_WIDTH = 280;
const CHART_HEIGHT = 70;

function SpendChart() {
  const max = Math.max(...spendChart);
  const min = Math.min(...spendChart);
  const range = max - min || 1;
  const step = CHART_WIDTH / (spendChart.length - 1);

  const points = spendChart
    .map((v, i) => {
      const x = i * step;
      const y = CHART_HEIGHT - ((v - min) / range) * CHART_HEIGHT;
      return `${x},${y}`;
    })
    .join(" ");

  const lastIndex = spendChart.length - 1;
  const lastX = lastIndex * step;
  const lastY = CHART_HEIGHT - ((spendChart[lastIndex] - min) / range) * CHART_HEIGHT;

  return (
    <Svg width={CHART_WIDTH} height={CHART_HEIGHT + 10}>
      <Polyline points={points} fill="none" stroke={colors.primary} strokeWidth={2} />
      <Circle cx={lastX} cy={lastY} r={4} fill={colors.primary} />
    </Svg>
  );
}

export default function HomeScreen({ onNavigate }: { onNavigate: (s: ScreenKey) => void }) {
  return (
    <View style={styles.screen}>
      <TopBar title="Finance" onAction={() => {}} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.hero}>You are on top</Text>
        <Text style={styles.heroMuted}>of your finances</Text>

        <View style={styles.chartCard}>
          <Text style={typography.label}>Total spend</Text>
          <Text style={styles.spendAmount}>${homeStats.totalSpend.toFixed(2)}</Text>
          <SpendChart />
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.splitCard} onPress={() => onNavigate("transactions")}>
            <View style={styles.splitHeader}>
              <Text style={typography.label}>Income</Text>
              <Ionicons name="arrow-up-outline" size={12} color={colors.success} />
            </View>
            <Text style={[styles.splitAmount, { color: colors.success }]}>
              ${homeStats.income.toFixed(2)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.splitCard} onPress={() => onNavigate("transactions")}>
            <View style={styles.splitHeader}>
              <Text style={typography.label}>Expense</Text>
              <Ionicons name="arrow-down-outline" size={12} color={colors.danger} />
            </View>
            <Text style={[styles.splitAmount, { color: colors.textPrimary }]}>
              ${homeStats.expense.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={typography.sectionTitle}>Your activity</Text>
          <TouchableOpacity onPress={() => onNavigate("transactions")}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.splitCard} onPress={() => onNavigate("transactions")}>
            <Text style={typography.label}>Combined bill</Text>
            <Text style={styles.splitAmount}>${homeStats.combinedBill.toLocaleString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.splitCard} onPress={() => onNavigate("target")}>
            <Text style={typography.label}>Upcoming bills</Text>
            <Text style={styles.splitAmount}>${homeStats.upcomingBills.toLocaleString()}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.targetBanner} onPress={() => onNavigate("target")}>
          <Ionicons name="flag-outline" size={16} color={colors.primaryDark} />
          <Text style={styles.targetBannerText}>View your savings target</Text>
          <Ionicons name="chevron-forward" size={14} color={colors.primaryDark} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  scroll: { paddingBottom: spacing.md },
  hero: { fontSize: 22, fontWeight: "500", color: colors.textPrimary },
  heroMuted: { fontSize: 22, fontWeight: "500", color: colors.textSecondary, marginBottom: spacing.md },
  chartCard: { backgroundColor: colors.card, borderRadius: radius.card, padding: spacing.md, marginBottom: spacing.sm },
  spendAmount: { fontSize: 24, fontWeight: "500", color: colors.textPrimary, marginBottom: spacing.sm },
  row: { flexDirection: "row", gap: spacing.sm, marginBottom: spacing.sm },
  splitCard: { flex: 1, backgroundColor: colors.card, borderRadius: radius.card, padding: spacing.md },
  splitHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  splitAmount: { fontSize: 16, fontWeight: "500", color: colors.textPrimary, marginTop: spacing.xs },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: spacing.sm, marginTop: spacing.xs },
  seeAll: { fontSize: 12, color: colors.primary, fontWeight: "500" },
  targetBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.accentBg,
    borderRadius: radius.card,
    padding: spacing.md,
    marginTop: spacing.xs,
  },
  targetBannerText: { flex: 1, fontSize: 12, fontWeight: "500", color: colors.primaryDark },
});
