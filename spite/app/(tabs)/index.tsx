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

  return (
    <View style={styles.pageContainer}>
      <Favourites cover={cover} setCover={setCover} />
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
