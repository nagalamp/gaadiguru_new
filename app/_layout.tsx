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
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import AppHeader from "../app/components/AppHeader";

export default function RootLayout() {
  const pathname = usePathname();

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  // HIDE HEADER IN LOGIN SCREEN

  const hideHeader =
    pathname.includes("/login");

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ActivityIndicator
          size="large"
          color="#111111"
        />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <>
        {/* GLOBAL HEADER */}

        {!hideHeader && <AppHeader />}

        {/* ROUTES */}

        <Stack
          screenOptions={{
            headerShown: false,

            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen name="(auth)" />

          <Stack.Screen name="(tabs)" />
        </Stack>

        {/* TOAST */}

        <Toast />
      </>
    </SafeAreaProvider>
  );
}