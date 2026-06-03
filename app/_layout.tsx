import { Stack } from "expo-router";

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

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EBCF59",
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
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(auth)" />

          <Stack.Screen name="(tabs)" />
        </Stack>

        <Toast />
      </>
    </SafeAreaProvider>
  );
}