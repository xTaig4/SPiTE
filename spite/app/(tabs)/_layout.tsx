import { Tabs } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { spotifyAuth } from "../services/auth/spotifyAuth";

export default function TabLayout() {
  const { theme } = useTheme();

  const handleSpotifyAuth = async () => {
    const tokens = await spotifyAuth();
    if (tokens) {
      console.log("Access Token:", tokens.accessToken);
      console.log("Refresh Token:", tokens.refreshToken);
    }
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "SPiTE",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Pressable onPress={handleSpotifyAuth}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/1200x/14/ea/2a/14ea2a59a2ec3cd1a50ef4c7e26274c1.jpg",
                }}
                style={{ width: 24, height: 24, borderRadius: 10 }}
              />
            </Pressable>
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
