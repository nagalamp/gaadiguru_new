import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    
    <Stack.Screen
        name="map-screen"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}