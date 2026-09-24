import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TopBar from "../components/TopBar";
import { colors, radius, spacing, typography } from "../theme";
import { recipients } from "../data/mockData";

export default function SendMoneyScreen({ onBack }: { onBack: () => void }) {
  const [amount, setAmount] = useState("250.00");
  const [note, setNote] = useState("Dinner split");
  const recipient = recipients[0];

  const handleSend = () => {
    const parsed = parseFloat(amount);
    if (isNaN(parsed) || parsed <= 0) {
      Alert.alert("Invalid amount", "Enter an amount greater than $0.");
      return;
    }
    // 👉 Replace with a real transfer call once the backend is wired up.
    Alert.alert("Sent", `$${parsed.toFixed(2)} to ${recipient.name}`);
  };

  return (
    <View style={styles.screen}>
      <TopBar title="Send money" onBack={onBack} />

      <View style={styles.amountBlock}>
        <Text style={typography.label}>Amount</Text>
        <View style={styles.amountRow}>
          <Text style={styles.dollarSign}>$</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <View style={styles.recipientCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{recipient.initials}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={typography.cardTitle}>{recipient.name}</Text>
          <Text style={typography.cardSubtitle}>**** {recipient.accountLast4}</Text>
        </View>
        <Ionicons name="chevron-down" size={14} color={colors.textSecondary} />
      </View>

      <View style={styles.noteCard}>
        <Text style={typography.label}>Note</Text>
        <TextInput
          style={styles.noteInput}
          value={note}
          onChangeText={setNote}
          placeholder="What's this for?"
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send ${(parseFloat(amount) || 0).toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  amountBlock: { alignItems: "center", marginBottom: spacing.lg },
  amountRow: { flexDirection: "row", alignItems: "center" },
  dollarSign: { fontSize: 28, fontWeight: "500", color: colors.textPrimary, marginRight: 2 },
  amountInput: { fontSize: 34, fontWeight: "500", color: colors.textPrimary, minWidth: 120, textAlign: "center" },
  recipientCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  avatar: { width: 34, height: 34, borderRadius: radius.avatar, backgroundColor: colors.accentBg, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 12, fontWeight: "500", color: colors.primaryDark },
  noteCard: { backgroundColor: colors.card, borderRadius: radius.card, padding: spacing.md, marginBottom: spacing.xl },
  noteInput: { fontSize: 13, color: colors.textPrimary, marginTop: 4, padding: 0 },
  sendButton: { backgroundColor: colors.primary, borderRadius: radius.card, paddingVertical: 13, alignItems: "center" },
  sendButtonText: { color: "#fff", fontSize: 14, fontWeight: "500" },
});
