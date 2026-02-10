import { Image } from "expo-image";
import { FlatList, Platform, StyleSheet, View, Pressable } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";
import { useState } from "react";
import PlayButton from "@/app/components/PlayButton";

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const [cover, setCover] = useState(
    "https://i.pinimg.com/736x/be/7e/f6/be7ef6f955a1b1c6a9007f8497c2a0e1.jpg",
  );

  return (
    <View style={styles.pageContainer}>
      <View style={styles.bookmarkContainer}>
        <Pressable
          onPress={() =>
            setCover(
              "https://i.pinimg.com/736x/43/35/0a/43350a80dfb2fc1f68d2532012e0e95a.jpg",
            )
          }
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/43/35/0a/43350a80dfb2fc1f68d2532012e0e95a.jpg",
            }}
            style={styles.bookmarkCover}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            setCover(
              "https://i.pinimg.com/1200x/45/6e/0f/456e0f3e6c257a56c47faa0e3e412732.jpg",
            )
          }
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/45/6e/0f/456e0f3e6c257a56c47faa0e3e412732.jpg",
            }}
            style={styles.bookmarkCover}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            setCover(
              "https://i.pinimg.com/1200x/d4/9f/f5/d49ff5a0d7b892e183f317cca549d040.jpg",
            )
          }
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/d4/9f/f5/d49ff5a0d7b892e183f317cca549d040.jpg",
            }}
            style={styles.bookmarkCover}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            setCover(
              "https://i.pinimg.com/736x/08/f0/bf/08f0bf82212d4eb3a95065fa45b9476d.jpg",
            )
          }
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/08/f0/bf/08f0bf82212d4eb3a95065fa45b9476d.jpg",
            }}
            style={styles.bookmarkCover}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            setCover(
              "https://i.pinimg.com/1200x/6e/51/80/6e5180230469d403ff660492b12ccb60.jpg",
            )
          }
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/6e/51/80/6e5180230469d403ff660492b12ccb60.jpg",
            }}
            style={styles.bookmarkCover}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            setCover(
              "https://i.pinimg.com/1200x/a3/7b/3d/a37b3de9bc7ea57f8ff41dfda0c222be.jpg",
            )
          }
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/a3/7b/3d/a37b3de9bc7ea57f8ff41dfda0c222be.jpg",
            }}
            style={styles.bookmarkCover}
          />
        </Pressable>
      </View>

      <View>
        {cover ? (
          <Image style={styles.coverContent} source={{ uri: cover }} />
        ) : null}
      </View>

      <PlayButton />
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
    bookmarkContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 10,
    },
    bookmarkCover: {
      width: 150,
      height: 100,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: theme.border,
      overflow: "hidden",
      backgroundColor: theme.primary,
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
    controlsContainer: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
    },
    controlButton: {
      width: 70,
      height: 70,
      borderRadius: 25,
      backgroundColor: theme.primary,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.border,
    },
    controlIcon: {
      width: 30,
      height: 30,
    },
  });
