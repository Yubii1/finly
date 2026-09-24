import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopBar from "../components/TopBar";
import TransactionRow from "../components/TransactionRow";
import { colors, radius, spacing, typography } from "../theme";
import { accounts, transactions } from "../data/mockData";
import { ScreenKey } from "../../App";

export default function AccountsScreen({ onNavigate }: { onNavigate: (s: ScreenKey) => void }) {
  return (
    <View style={styles.screen}>
      <TopBar title="Accounts" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.sectionHeaderRow}>
          <Text style={typography.sectionTitle}>Accounts</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={styles.row}>
          {accounts.map((acc) => (
            <View key={acc.id} style={styles.accountCard}>
              <View style={styles.accountIcon}>
                <Ionicons name={acc.icon} size={16} color={colors.primaryDark} />
              </View>
              <Text style={typography.cardTitle}>{acc.name}</Text>
              <Text style={typography.cardSubtitle}>${acc.balance.toLocaleString()}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.sendCard} onPress={() => onNavigate("sendMoney")}>
          <View style={styles.sendLeft}>
            <Ionicons name="paper-plane-outline" size={16} color="#fff" />
            <Text style={styles.sendText}>Send money</Text>
          </View>
          <Ionicons name="chevron-forward" size={14} color="#fff" />
        </TouchableOpacity>

        <View style={styles.sectionHeaderRow}>
          <Text style={typography.sectionTitle}>Recent transaction</Text>
          <TouchableOpacity onPress={() => onNavigate("transactions")}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        {transactions.slice(0, 3).map((t) => (
          <TransactionRow key={t.id} transaction={t} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  scroll: { paddingBottom: spacing.md },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: spacing.sm, marginTop: spacing.xs },
  seeAll: { fontSize: 12, color: colors.primary, fontWeight: "500" },
  row: { flexDirection: "row", gap: spacing.sm, marginBottom: spacing.md },
  accountCard: { flex: 1, backgroundColor: colors.card, borderRadius: radius.card, padding: spacing.md },
  accountIcon: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: colors.accentBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  sendCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  sendLeft: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  sendText: { color: "#fff", fontSize: 13, fontWeight: "500" },
});
