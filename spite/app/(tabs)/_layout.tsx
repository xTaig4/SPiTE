import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
    </Tabs>
  );
}

const styles = {};
