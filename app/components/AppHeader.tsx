import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from "react-native";
  
  import {
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  
  import {
    useSafeAreaInsets,
  } from "react-native-safe-area-context";
  
  import { theme } from "../../theme";
  
  type Props = {
    title?: string;
  
    onNotificationPress?: () => void;
  };
  
  export default function AppHeader({
    title = "GaadiGuru",
  
    onNotificationPress,
  }: Props) {
    const insets = useSafeAreaInsets();
  
    return (
      <View
        style={[
          styles.wrapper,
  
          {
            paddingTop: insets.top + 10,
          },
        ]}
      >
        <View style={styles.container}>
          {/* LEFT */}
  
          <View style={styles.leftSection}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
  
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
  
          {/* RIGHT */}
  
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onNotificationPress}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={theme.COLORS.text}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor:
        theme.COLORS.background,
  
      paddingHorizontal: 20,
  
      paddingBottom: 18,
  
      elevation: 4,
  
      shadowColor: "#000",
  
      shadowOffset: {
        width: 0,
        height: 2,
      },
  
      shadowOpacity: 0.08,
  
      shadowRadius: 6,
    },
  
    container: {
      height: 70,
  
      flexDirection: "row",
  
      alignItems: "center",
  
      justifyContent: "space-between",
    },
  
    leftSection: {
      flexDirection: "row",
  
      alignItems: "center",
    },
  
    logo: {
      width: 50,
  
      height: 50,
  
      marginRight: 12,
    },
  
    title: {
      fontSize: 22,
  
      color: theme.COLORS.text,
  
      fontFamily: theme.FONTS.bold,
    },
  
    iconButton: {
      width: 46,
  
      height: 46,
  
      borderRadius: 23,
  
      backgroundColor: "#FFFFFF",
  
      justifyContent: "center",
  
      alignItems: "center",
  
      elevation: 3,
  
      shadowColor: "#000",
  
      shadowOffset: {
        width: 0,
        height: 2,
      },
  
      shadowOpacity: 0.1,
  
      shadowRadius: 4,
    },
  });