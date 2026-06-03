// app/components/RouteMap.tsx

import React, {
  useRef,
  useState,
} from "react";

import {
  Dimensions,
  StyleSheet,
  View,
 Text,
} from "react-native";

import MapView, {
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

export type RouteLocation =
  {
    latitude: number;

    longitude: number;

    address?: string;
  };

type Props = {
  pickupLocation: RouteLocation;

  dropLocation: RouteLocation;
};

const GOOGLE_API_KEY =
  process.env
    .EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const { width } =
  Dimensions.get("window");

export default function RouteMap({
  pickupLocation,
  dropLocation,
}: Props) {
  const mapRef =
    useRef<MapView>(null);

  const [distance, setDistance] =
    useState("");

  const [duration, setDuration] =
    useState("");

  return (
    <View style={styles.container}>
      {/* DETAILS CARD */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <Text style={styles.label}>
            Distance
          </Text>

          <Text style={styles.value}>
            {distance || "--"}
          </Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>
            Duration
          </Text>

          <Text style={styles.value}>
            {duration || "--"}
          </Text>
        </View>
      </View>

      <MapView
        ref={mapRef}

        provider={
          PROVIDER_GOOGLE
        }

        style={styles.map}

        initialRegion={{
          latitude:
            (
              pickupLocation.latitude +
              dropLocation.latitude
            ) /
            2,

          longitude:
            (
              pickupLocation.longitude +
              dropLocation.longitude
            ) /
            2,

          latitudeDelta: 0.08,

          longitudeDelta: 0.08,
        }}

        showsUserLocation
        showsMyLocationButton
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

          description={
            pickupLocation.address
          }

          pinColor="#2563EB"
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

          description={
            dropLocation.address
          }

          pinColor="#EF4444"
        />

        {/* ROAD ROUTE */}
        <MapViewDirections
          origin={{
            latitude:
              pickupLocation.latitude,

            longitude:
              pickupLocation.longitude,
          }}

          destination={{
            latitude:
              dropLocation.latitude,

            longitude:
              dropLocation.longitude,
          }}

          apikey={
            GOOGLE_API_KEY
          }

          strokeWidth={5}

          strokeColor="#111827"

          mode="DRIVING"

          optimizeWaypoints

          onReady={(
            result
          ) => {
            setDistance(
              `${result.distance.toFixed(
                1
              )} km`
            );

            setDuration(
              `${Math.ceil(
                result.duration
              )} mins`
            );

            mapRef.current?.fitToCoordinates(
              result.coordinates,
              {
                edgePadding: {
                  top: 100,

                  right: 50,

                  bottom: 100,

                  left: 50,
                },

                animated: true,
              }
            );
          }}

          onError={(
            error
          ) => {
            console.log(
              "Directions Error:",
              error
            );
          }}
        />
      </MapView>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      height: 350,

      marginHorizontal: 16,

      marginTop: 24,

      borderRadius: 24,

      overflow: "hidden",

      backgroundColor:
        "#E5E7EB",
    },

    detailsContainer: {
      position: "absolute",

      top: 16,

      left: 16,

      right: 16,

      zIndex: 999,

      flexDirection: "row",

      gap: 12,
    },

    detailBox: {
      flex: 1,

      backgroundColor:
        "rgba(255,255,255,0.95)",

      paddingVertical: 12,

      paddingHorizontal: 14,

      borderRadius: 16,

      elevation: 4,
    },

    label: {
      fontSize: 12,

      color: "#6B7280",
    },

    value: {
      marginTop: 4,

      fontSize: 18,

      fontWeight: "700",

      color: "#111827",
    },

    map: {
      flex: 1,

      width: width - 32,
    },
  });