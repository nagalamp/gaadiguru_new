// app/map-screens/components/DriverOnMap.tsx

import React from "react";

import {
  Image,
  StyleSheet,
  View,
} from "react-native";

import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";

type Props = {
  pickupLocation: any;

  dropLocation: any;
};

export default function DriverOnMap({
  pickupLocation,

  dropLocation,
}: Props) {
  // MOCK DRIVER LOCATION
  const driverLocation = {
    latitude:
      pickupLocation.latitude +
      0.0025,

    longitude:
      pickupLocation.longitude +
      0.0025,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude:
          pickupLocation.latitude,

        longitude:
          pickupLocation.longitude,

        latitudeDelta: 0.02,

        longitudeDelta: 0.02,
      }}
    >
      {/* PICKUP */}
      <Marker
        coordinate={{
          latitude:
            pickupLocation.latitude,

          longitude:
            pickupLocation.longitude,
        }}
        title="Pickup"
      />

      {/* DROP */}
      <Marker
        coordinate={{
          latitude:
            dropLocation.latitude,

          longitude:
            dropLocation.longitude,
        }}
        title="Drop"
        pinColor="green"
      />

      {/* DRIVER */}
      <Marker
        coordinate={driverLocation}
        title="Driver"
      >
        <View
          style={styles.vehicleMarker}
        >
          <Image
            source={{
              uri:
                "https://cdn-icons-png.flaticon.com/512/744/744465.png",
            }}
            style={styles.vehicleIcon}
          />
        </View>
      </Marker>

      {/* ROUTE */}
      <Polyline
        coordinates={[
          driverLocation,

          {
            latitude:
              pickupLocation.latitude,

            longitude:
              pickupLocation.longitude,
          },

          {
            latitude:
              dropLocation.latitude,

            longitude:
              dropLocation.longitude,
          },
        ]}
        strokeWidth={4}
        strokeColor="#111827"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  vehicleMarker: {
    backgroundColor: "#fff",

    padding: 8,

    borderRadius: 30,

    borderWidth: 2,

    borderColor: "#111827",
  },

  vehicleIcon: {
    width: 34,

    height: 34,
  },
});