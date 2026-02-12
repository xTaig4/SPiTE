import { Image, Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";

interface FavouritesProps {
  setCover: (url: string) => void;
  playList?: string[];
}

export default function Favourites({ setCover, playList }: FavouritesProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.bookmarkContainer}>
      {playList &&
        playList.map((imageUrl, index) => (
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
