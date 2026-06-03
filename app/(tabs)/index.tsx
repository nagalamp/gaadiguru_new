import {
  View,
  StyleSheet,
  Text,
} from "react-native";

import { useState } from "react";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import TopSwitchTabs from "../components/TopSwitchTabs";

import BookRideScreen from "../components/BookRideScreen";

import ParcelScreen from "../components/ParcelScreen";

export default function HomeScreen() {
  const [activeTab, setActiveTab] =
    useState("book");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* APP HEADER */}

       

        {/* TOP SWITCH TABS */}

        <TopSwitchTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* BODY */}

        <View style={styles.body}>
          {activeTab === "book" ? (
            <BookRideScreen />
          ) : (
            <ParcelScreen />
          )}
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