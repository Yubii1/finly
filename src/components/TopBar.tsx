import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, radius, spacing, typography } from "../theme";

type TopBarProps = {
  title: string;
  onBack?: () => void;
  onAction?: () => void;
  actionIcon?: keyof typeof Ionicons.glyphMap;
};

export default function TopBar({ title, onBack, onAction, actionIcon = "add" }: TopBarProps) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {onBack && (
          <TouchableOpacity onPress={onBack} accessibilityLabel="Go back" style={styles.backBtn}>
            <Ionicons name="arrow-back" size={18} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
        <Text style={typography.screenTitle}>{title}</Text>
      </View>
      {onAction && (
        <TouchableOpacity onPress={onAction} style={styles.actionBtn} accessibilityLabel="Action">
          <Ionicons name={actionIcon} size={18} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  left: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  backBtn: { padding: 2 },
  actionBtn: {
    width: 32,
    height: 32,
    borderRadius: radius.avatar,
    backgroundColor: colors.textPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
});
