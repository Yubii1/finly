# Finance App UI

A frontend-only Expo/React Native app built from Behance reference designs.
No backend — every screen reads from `src/data/mockData.ts`. Built for a
portfolio demo; wire it to a real backend (Supabase, REST, whatever) later
by replacing that one file's exports with real fetch calls.

## Run it

```bash
npm install
npx expo start
```

Then open in Expo Go, an iOS simulator, an Android emulator, or the web.

## Structure

```
App.tsx                     Navigation (simple screen-state stack, no library needed for 6 screens)
src/
  theme.ts                  Colors, spacing, radius, typography — single source of truth
  data/mockData.ts          All static data. Swap for real API calls when ready.
  components/
    BottomNav.tsx            4-tab bar (Home / Merchants / Banking / Account)
    TopBar.tsx                Screen header, optional back button + action button
    StatCard.tsx               Small metric card (used in Target's stats grid)
    ProgressBar.tsx            Linear progress (savings progress)
    ProgressRing.tsx           Circular progress (Target's "% left" gauge)
    TransactionRow.tsx         Single transaction line item (reused on 2 screens)
  screens/
    HomeScreen.tsx              Finance dashboard, spend chart, income/expense
    AccountsScreen.tsx          Linked accounts + recent transactions
    TargetScreen.tsx            Savings goal progress + stats grid
    TransactionsScreen.tsx      Full searchable transaction list
    SendMoneyScreen.tsx         Send money flow
    ProfileScreen.tsx           Account/profile menu
```

## Navigation map

- **Home / Merchants / Banking / Account** are the 4 bottom tabs, mapped to
  Home, Transactions, Accounts, and Profile respectively.
- **Target** and **Send money** don't have their own tab — they're opened
  from inside a screen (tapping the target banner on Home, or "Send money"
  on Accounts) and the back button returns to whichever tab opened them.

## Known gaps (by design — this is a UI-only build)

- No auth, no real data persistence — everything resets on reload.
- `handleSend` in `SendMoneyScreen.tsx` shows an alert instead of calling a
  backend — the `👉` comment marks where a real API call goes.
- No empty/loading/error states since there's no async data yet.
