import { Image, Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";

interface FavouritesProps {
  cover: string;
  setCover: (url: string) => void;
}

export default function Favourites({ cover, setCover }: FavouritesProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const collection = [
    "https://i.pinimg.com/736x/43/35/0a/43350a80dfb2fc1f68d2532012e0e95a.jpg",
    "https://i.pinimg.com/1200x/45/6e/0f/456e0f3e6c257a56c47faa0e3e412732.jpg",
    "https://i.pinimg.com/1200x/d4/9f/f5/d49ff5a0d7b892e183f317cca549d040.jpg",
    "https://i.pinimg.com/736x/08/f0/bf/08f0bf82212d4eb3a95065fa45b9476d.jpg",
    "https://i.pinimg.com/1200x/6e/51/80/6e5180230469d403ff660492b12ccb60.jpg",
    "https://i.pinimg.com/1200x/a3/7b/3d/a37b3de9bc7ea57f8ff41dfda0c222be.jpg",
  ];

  return (
    <View style={styles.bookmarkContainer}>
      {collection.map((imageUrl, index) => (
        <Pressable key={index} onPress={() => setCover(imageUrl)}>
          <Image source={{ uri: imageUrl }} style={styles.bookmarkCover} />
        </Pressable>
      ))}
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
  });
