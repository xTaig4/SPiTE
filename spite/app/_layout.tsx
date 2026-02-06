import { Theme } from "@/constants/themes";
import { ThemeProvider, useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

function RootNavigator() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  console.log("Root theme background:", theme.background);

  return (
    <View style={[styles.container]}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: theme.background },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });
