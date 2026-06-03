import { useState } from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import TopSwitchTabs from "../../components/TopSwitchTabs";
import BookRideScreen from "../../components/BookRideScreen";
import ParcelScreen from "../../components/ParcelScreen";

const TABS = {
  BOOK: "book",
  PARCEL: "parcel",
};

export default function HomeScreen() {
  const [activeTab, setActiveTab] =
    useState(TABS.BOOK);

  const renderScreen = () => {
    switch (activeTab) {
      case TABS.BOOK:
        return <BookRideScreen />;

      case TABS.PARCEL:
        return <ParcelScreen />;

      default:
        return <BookRideScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TopSwitchTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <View style={styles.body}>
          {renderScreen()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  body: {
    flex: 1,
  },
});