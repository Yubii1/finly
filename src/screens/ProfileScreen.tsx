import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopBar from "../components/TopBar";
import { colors, radius, spacing, typography } from "../theme";
import { profile } from "../data/mockData";

type MenuItem = { key: string; label: string; icon: keyof typeof Ionicons.glyphMap };

const MENU_ITEMS: MenuItem[] = [
  { key: "cards", label: "Linked cards", icon: "card-outline" },
  { key: "notifications", label: "Notifications", icon: "notifications-outline" },
  { key: "security", label: "Security", icon: "shield-checkmark-outline" },
  { key: "help", label: "Help center", icon: "help-circle-outline" },
];

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <TopBar title="Account" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.profileBlock}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{profile.initials}</Text>
          </View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>

        <View style={styles.menuCard}>
          {MENU_ITEMS.map((item, i) => (
            <TouchableOpacity
              key={item.key}
              style={[styles.menuRow, i < MENU_ITEMS.length - 1 && styles.menuRowDivider]}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={16} color={colors.textSecondary} />
                <Text style={typography.cardTitle}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={14} color="#bbb" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutCard}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  scroll: { paddingBottom: spacing.md },
  profileBlock: { alignItems: "center", marginBottom: spacing.lg },
  avatar: { width: 60, height: 60, borderRadius: radius.avatar, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", marginBottom: spacing.sm },
  avatarText: { fontSize: 18, fontWeight: "500", color: "#fff" },
  name: { fontSize: 15, fontWeight: "500", color: colors.textPrimary },
  email: { fontSize: 12, color: colors.textSecondary },
  menuCard: { backgroundColor: colors.card, borderRadius: radius.card, paddingHorizontal: spacing.md, marginBottom: spacing.md },
  menuRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 11 },
  menuRowDivider: { borderBottomWidth: 0.5, borderBottomColor: colors.border },
  menuLeft: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  logoutCard: { backgroundColor: colors.card, borderRadius: radius.card, padding: spacing.md, alignItems: "center" },
  logoutText: { fontSize: 13, fontWeight: "500", color: colors.logoutRed },
});
