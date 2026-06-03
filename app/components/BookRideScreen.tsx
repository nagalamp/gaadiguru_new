import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import WhereToGoBox from "./WhereToGoBox";
import RideTypeSelector from "./RideTypeSelector";

export default function BookRideScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <WhereToGoBox />
      </View>
      <View style={styles.boxContainer}>
        <RideTypeSelector />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },

  boxContainer: {
    width: "100%",

    marginTop: 20,
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