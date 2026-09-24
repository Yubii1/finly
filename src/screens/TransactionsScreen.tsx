import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import TopBar from "../components/TopBar";
import TransactionRow from "../components/TransactionRow";
import { colors, radius, spacing } from "../theme";
import { transactions, Transaction } from "../data/mockData";

function groupByDay(items: Transaction[]) {
  const order: Transaction["group"][] = ["Today", "Yesterday", "This week"];
  return order
    .map((group) => ({ group, items: items.filter((t) => t.group === group) }))
    .filter((section) => section.items.length > 0);
}

export default function TransactionsScreen({ onBack }: { onBack: () => void }) {
  const [query, setQuery] = useState("");
  const filtered = transactions.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));
  const sections = groupByDay(filtered);

  return (
    <View style={styles.screen}>
      <TopBar title="Transactions" onBack={onBack} />

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={16} color={colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search transactions"
          placeholderTextColor={colors.textSecondary}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {sections.map((section) => (
          <View key={section.group}>
            <Text style={styles.sectionLabel}>{section.group}</Text>
            {section.items.map((t) => (
              <TransactionRow key={t.id} transaction={t} />
            ))}
          </View>
        ))}
        {filtered.length === 0 && (
          <Text style={styles.emptyText}>No transactions match "{query}".</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  searchInput: { flex: 1, fontSize: 13, color: colors.textPrimary },
  list: { paddingBottom: spacing.md },
  sectionLabel: { fontSize: 11, fontWeight: "500", color: colors.textSecondary, marginBottom: spacing.sm, marginTop: spacing.sm },
  emptyText: { textAlign: "center", color: colors.textSecondary, fontSize: 13, marginTop: spacing.xl },
});
