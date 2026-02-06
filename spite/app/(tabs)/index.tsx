import { Image } from "expo-image";
import { FlatList, Platform, StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <view style={styles.container}>
      <view style={styles.content}></view>
      <view style={styles.content}></view>
      <view style={styles.content}></view>
    </view>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      width: 100,
      height: 100,
      margin: 10,
      padding: 20,
      backgroundColor: theme.primary,
    },
  });
