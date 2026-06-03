import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import WhereToGoBox from "./WhereToGoBox";
import RideTypeSelector from "./RideTypeSelector";
import AdsBanner from "./AdsBanner";
import PlacesSlider from "./PlacesSlider";

export default function BookRideScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* WHERE TO GO */}
      <View style={styles.boxContainer}>
        <WhereToGoBox />
      </View>

      {/* RIDE TYPES */}
      <View style={styles.boxContainer}>
        <RideTypeSelector />
      </View>

      {/* ADS */}
      <View style={styles.boxContainer}>
        <PlacesSlider />
      </View>

      <View style={styles.boxContainer}>
        <AdsBanner />
      </View>

      <View style={styles.boxContainer}>
        <AdsBanner />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },

  boxContainer: {
    width: "100%",
    marginTop: 20,
  },
});