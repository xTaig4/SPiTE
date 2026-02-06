import { Image } from "expo-image";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@/constants/themes";

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View >
      <View style={styles.container}>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
      </View>
    </View>

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
      width: 150,
      height: 100,
      margin: 10,
      padding: 20,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: theme.border,
      backgroundColor: theme.primary,
    },
  });
