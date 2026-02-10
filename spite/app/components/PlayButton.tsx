import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";
import { Image } from "expo-image";
import { useState } from "react";

export default function PlayButton() {
    const { theme } = useTheme();
    const styles = createStyles(theme);
    const [isPlaying, setIsPlaying] = useState(false);

   const togglePlay = () => {
     setIsPlaying((prev) => !prev);
    }; 
    
  return (
    <View style={styles.controlsContainer}>
      <Pressable style={styles.controlButton} >
        <Image
          source={require("@/assets/images/next.png")}
          style={[styles.controlIcon, { transform: [{ rotate: "180deg" }] }]}
          contentFit="contain"
        />
      </Pressable>
      <Pressable style={styles.controlButton} onPress={togglePlay}>
        <Image
          source={isPlaying ? require("@/assets/images/pause.png") : require("@/assets/images/play-button.png")}
          style={styles.controlIcon}
          contentFit="contain"
        />
      </Pressable>
      <Pressable style={styles.controlButton} >
        <Image
          source={require("@/assets/images/next.png")}
          style={[styles.controlIcon]}
          contentFit="contain"
        />
      </Pressable>
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
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
