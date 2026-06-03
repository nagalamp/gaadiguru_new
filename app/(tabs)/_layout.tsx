import { Tabs } from "expo-router";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 70 + insets.bottom,

          paddingBottom: insets.bottom,

          paddingTop: 6,

          backgroundColor: "#111111",

          borderTopWidth: 0,
        },

        tabBarActiveTintColor: "#EBCF59",

        tabBarInactiveTintColor: "#999999",

        tabBarLabelStyle: {
          fontFamily: "Comfortaa_600SemiBold",

          fontSize: 12,

          marginBottom: 4,
        },
      }}
    >
      {/* HOME */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({
            color,
            size,
            focused,
          }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "home"
                  : "home-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* PROFILE */}

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({
            color,
            size,
            focused,
          }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "account"
                  : "account-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}