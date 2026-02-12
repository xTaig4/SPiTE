import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";
import { Image } from "expo-image";
import { useState } from "react";

interface PlayButtonProps {
  setCover: (url: string) => void;
  playList?: string[];
}

export default function PlayButton({ setCover, playList }: PlayButtonProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    if (playList && playList.length > 0) {
      setCurrentTrackIndex((prev) => (prev + 1) % playList.length);
      setCover(playList[(currentTrackIndex + 1) % playList.length]);
    }
  };

  const handlePrevious = () => {
    if (playList && playList.length > 0) {
      setCurrentTrackIndex((prev) =>
        prev === 0 ? playList.length - 1 : prev - 1,
      );
      setCover(
        playList[
          currentTrackIndex === 0 ? playList.length - 1 : currentTrackIndex - 1
        ],
      );
    }
  };

  return (
    <View style={styles.controlsContainer}>
      <Pressable style={styles.controlButton} onPress={handlePrevious}>
        <Image
          source={require("@/assets/images/next.png")}
          style={[styles.controlIcon, { transform: [{ rotate: "180deg" }] }]}
          contentFit="contain"
        />
      </Pressable>
      <Pressable style={styles.controlButton} onPress={togglePlay}>
        <Image
          source={
            isPlaying
              ? require("@/assets/images/pause.png")
              : require("@/assets/images/play-button.png")
          }
          style={styles.controlIcon}
          contentFit="contain"
        />
      </Pressable>
      <Pressable style={styles.controlButton} onPress={handleNext}>
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
