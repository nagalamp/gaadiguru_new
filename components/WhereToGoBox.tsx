// app/components/WhereToGoBox.tsx

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
  } from "react-native";
  
  import {
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  
  import { useRouter } from "expo-router";
  
  import { theme } from "../theme";
  
  export default function WhereToGoBox() {
    const router = useRouter();
  
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.container}
        onPress={() =>
          router.push(
            "/map-screens/location-picker"
          )
        }
      >
        {/* LEFT ICON */}
  
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={22}
            color={theme.COLORS.textSecondary}
          />
        </View>
  
        {/* CONTENT */}
  
        <View style={styles.content}>
          <Text style={styles.placeholder}>
            Where do you want to go?
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: 58,
  
      backgroundColor: "#FFFFFF",
  
      borderRadius: 16,
  
      paddingHorizontal: 14,
  
      flexDirection: "row",
  
      alignItems: "center",
  
      borderWidth: 1,
  
      borderColor:
        theme.COLORS.border,
    },
  
    iconContainer: {
      marginRight: 12,
    },
  
    content: {
      flex: 1,
    },
  
    placeholder: {
      fontSize: 15,
  
      fontWeight: "700",
  
      color:
        theme.COLORS.text,
  
      fontFamily:
        theme.FONTS.bold,
    },
  });