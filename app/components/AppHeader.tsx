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
  
  type Props = {
    title?: string;
  
    onNotificationPress?: () => void;
  };
  
  export default function AppHeader({
    title = "GaadiGuru",
  
    onNotificationPress,
  }: Props) {
    return (
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
            color="#111111"
          />
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: 70,
  
      flexDirection: "row",
  
      alignItems: "center",
  
      justifyContent: "space-between",
  
      backgroundColor: "#FFFFFF",
  
      paddingHorizontal: 4,
  
      marginBottom: 20,
    },
  
    leftSection: {
      flexDirection: "row",
  
      alignItems: "center",
    },
  
    logo: {
      width: 42,
  
      height: 42,
  
      marginRight: 12,
    },
  
    title: {
      fontSize: 22,
  
      color: "#111111",
  
      fontFamily: "Comfortaa_700Bold",
    },
  
    iconButton: {
      width: 42,
  
      height: 42,
  
      borderRadius: 21,
  
      backgroundColor: "#F4DE7A",
  
      justifyContent: "center",
  
      alignItems: "center",
    },
  });