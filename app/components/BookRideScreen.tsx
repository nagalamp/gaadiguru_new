import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
  
  export default function BookRideScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Book Ride Screens
        </Text>
  
        <Text style={styles.subtitle}>
          Search rides, choose vehicle and
          book your trip.
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      justifyContent: "center",
  
      alignItems: "center",
    },
  
    title: {
      fontSize: 28,
  
      color: "#111111",
  
      fontFamily: "Comfortaa_700Bold",
  
      marginBottom: 12,
    },
  
    subtitle: {
      fontSize: 15,
  
      color: "#5C5130",
  
      textAlign: "center",
  
      lineHeight: 24,
  
      fontFamily: "Comfortaa_500Medium",
    },
  });