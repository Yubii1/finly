import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "../theme";
import { Transaction } from "../data/mockData";

export default function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isIncome = transaction.amount > 0;
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <View
          style={[
            styles.iconWrap,
            { backgroundColor: isIncome ? colors.successBg : colors.accentBg },
          ]}
        >
          <Ionicons
            name={transaction.icon}
            size={16}
            color={isIncome ? colors.success : colors.primaryDark}
          />
        </View>
        <View>
          <Text style={typography.cardTitle}>{transaction.name}</Text>
          <Text style={typography.cardSubtitle}>{transaction.category}</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: isIncome ? colors.success : colors.textPrimary }]}>
        {isIncome ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  left: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  iconWrap: { width: 34, height: 34, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  amount: { fontSize: 13, fontWeight: "500" },
});
