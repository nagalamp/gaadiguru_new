import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  import { router } from "expo-router";
  
  import { removeToken } from "../utils/storage";
  
  export default function ProfileScreen() {
    const logout = async () => {
      await removeToken();
  
      await AsyncStorage.clear();
  
      router.replace("/login");
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Profile Screen
        </Text>
  
        <TouchableOpacity
          style={styles.button}
          onPress={logout}
        >
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EBCF59",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
    },
  
    title: {
      fontSize: 28,
      color: "#111111",
      fontFamily: "Comfortaa_700Bold",
      marginBottom: 30,
    },
  
    button: {
      height: 58,
      width: "100%",
      backgroundColor: "#111111",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  
    buttonText: {
      color: "#EBCF59",
      fontSize: 16,
      fontFamily: "Comfortaa_700Bold",
    },
  });