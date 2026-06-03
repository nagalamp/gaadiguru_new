import {
  View,
  StyleSheet,
} from "react-native";

import { useState } from "react";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import TopSwitchTabs from "../components/TopSwitchTabs";

import BookRideScreen from "../components/BookRideScreen";

import ParcelScreen from "../components/ParcelScreen";

import AppHeader from "../components/AppHeader";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [activeTab, setActiveTab] =
    useState("book");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.content,

          {
            paddingTop: insets.top,
          },
        ]}
      >
        {/* APP HEADER */}

        <AppHeader />

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

    paddingHorizontal: 20,
  },

  body: {
    flex: 1,
  },
});