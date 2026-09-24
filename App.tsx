// Simple built-in navigation — no react-navigation dependency needed for
// this static, frontend-only build. Swap this for expo-router or
// @react-navigation if the project grows past a handful of screens.

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import BottomNav from "./src/components/BottomNav";
import { colors, spacing } from "./src/theme";
import HomeScreen from "./src/screens/HomeScreen";
import AccountsScreen from "./src/screens/AccountsScreen";
import TargetScreen from "./src/screens/TargetScreen";
import TransactionsScreen from "./src/screens/TransactionsScreen";
import SendMoneyScreen from "./src/screens/SendMoneyScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

export type ScreenKey = "home" | "accounts" | "target" | "transactions" | "sendMoney" | "profile";

// The 4 bottom-nav tabs. "target" and "sendMoney" are reached from inside a
// screen (a card tap, a "Send money" row) and go back to whichever tab was
// active before, rather than getting their own tab — matching the reference.
const TAB_SCREENS: ScreenKey[] = ["home", "transactions", "accounts", "profile"];

export default function App() {
  const [screen, setScreen] = useState<ScreenKey>("home");
  const [lastTab, setLastTab] = useState<ScreenKey>("home");

  const navigate = (target: ScreenKey) => {
    if (TAB_SCREENS.includes(target)) setLastTab(target);
    setScreen(target);
  };

  const goBack = () => setScreen(lastTab);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        {screen === "home" && <HomeScreen onNavigate={navigate} />}
        {screen === "accounts" && <AccountsScreen onNavigate={navigate} />}
        {screen === "target" && <TargetScreen onBack={goBack} />}
        {screen === "transactions" && <TransactionsScreen onBack={goBack} />}
        {screen === "sendMoney" && <SendMoneyScreen onBack={goBack} />}
        {screen === "profile" && <ProfileScreen />}
      </View>

      {TAB_SCREENS.includes(screen) && (
        <View style={styles.navWrap}>
          <BottomNav active={screen} onNavigate={navigate} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1 },
  navWrap: { paddingHorizontal: spacing.lg, paddingBottom: spacing.sm },
});
