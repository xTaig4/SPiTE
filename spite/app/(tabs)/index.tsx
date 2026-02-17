import { Image } from "expo-image";
import { FlatList, Platform, StyleSheet, View, Pressable } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";
import { useState } from "react";
import PlayButton from "@/app/components/PlayButton";
import Favourites from "@/app/components/Favourites";

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [cover, setCover] = useState(
    "https://i.pinimg.com/736x/be/7e/f6/be7ef6f955a1b1c6a9007f8497c2a0e1.jpg",
  );

  const coverArt = [
    "https://i.pinimg.com/736x/43/35/0a/43350a80dfb2fc1f68d2532012e0e95a.jpg",
    "https://i.pinimg.com/1200x/45/6e/0f/456e0f3e6c257a56c47faa0e3e412732.jpg",
    "https://i.pinimg.com/1200x/d4/9f/f5/d49ff5a0d7b892e183f317cca549d040.jpg",
    "https://i.pinimg.com/736x/08/f0/bf/08f0bf82212d4eb3a95065fa45b9476d.jpg",
    "https://i.pinimg.com/1200x/6e/51/80/6e5180230469d403ff660492b12ccb60.jpg",
    "https://i.pinimg.com/1200x/a3/7b/3d/a37b3de9bc7ea57f8ff41dfda0c222be.jpg",
  ];

  return (
    <View style={styles.pageContainer}>
      <Favourites setCover={setCover} playList={coverArt} />
      <View>
        {cover ? (
          <Image style={styles.coverContent} source={{ uri: cover }} />
        ) : null}
      </View>
      <PlayButton setCover={setCover} playList={coverArt} />
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    pageContainer: {
      flexDirection: "column",
      height: "100%",
      flexWrap: "wrap",
      alignItems: "center",
      backgroundColor: theme.background,
      justifyContent: "flex-start",
      paddingTop: 20,
      gap: 20,
    },
    coverContent: {
      width: 300,
      height: 200,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: theme.border,
      overflow: "hidden",
      backgroundColor: theme.primary,
    },
  });
