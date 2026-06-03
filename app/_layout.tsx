import { Stack, usePathname } from "expo-router";

import Toast from "react-native-toast-message";

import { useFonts } from "expo-font";

import {
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

import {
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import AppHeader from "../components/AppHeader";

import { theme } from "../theme";

export default function RootLayout() {
  const pathname = usePathname();

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  // HIDE HEADER ON AUTH SCREENS

  const hideHeader =
    pathname?.includes("/login");

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size="large"
          color={theme.COLORS.primary}
        />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* GLOBAL HEADER */}

        {!hideHeader && <AppHeader />}

        {/* ROUTES */}

        <View style={styles.body}>
          <Stack
            screenOptions={{
              headerShown: false,

              contentStyle: {
                backgroundColor:
                  theme.COLORS.background,
              },
            }}
          />
        </View>

        {/* TOAST */}

        <Toast />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:
      theme.COLORS.background,
  },

  body: {
    flex: 1,
  },

  loaderContainer: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor:
      theme.COLORS.background,
  },
});