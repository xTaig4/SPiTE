import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "SPiTE",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={{
                uri: "https://i.pinimg.com/1200x/14/ea/2a/14ea2a59a2ec3cd1a50ef4c7e26274c1.jpg",
              }}
              style={{ width: 24, height: 24, borderRadius: 10 }}
            />
          ),
          tabBarStyle: {
            backgroundColor: theme.background,
            justifyContent: "center",
          },
        }}
      />
    </Tabs>
  );
}

const styles = {};
