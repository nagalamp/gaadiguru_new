// app/map-screens/components/RideConfirmed.tsx

import React from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DriverOnMap from "../DriverOnMap";

type Props = {
  vehicle: any;

  pickupAddress: string;

  dropAddress: string;

  pickupLocation: any;

  dropLocation: any;
};

export default function RideConfirmed({
  vehicle,

  pickupAddress,

  dropAddress,

  pickupLocation,

  dropLocation,
}: Props) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={
        false
      }
    >
      {/* SUCCESS */}
      <View style={styles.successBox}>
        <Text style={styles.emoji}>
          🚖
        </Text>

        <Text style={styles.successTitle}>
          Ride Confirmed
        </Text>

        <Text style={styles.successSubTitle}>
          Driver arriving in 3 mins
        </Text>
      </View>

      {/* LIVE MAP */}
      <View style={styles.mapContainer}>
        <DriverOnMap
          pickupLocation={
            pickupLocation
          }
          dropLocation={
            dropLocation
          }
        />
      </View>

      {/* OTP */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Ride OTP
        </Text>

        <Text style={styles.otp}>
          4821
        </Text>

        <Text style={styles.otpText}>
          Share this OTP with driver
        </Text>
      </View>

      {/* DRIVER DETAILS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Driver Details
        </Text>

        <View style={styles.driverRow}>
          <Image
            source={{
              uri:
                "https://randomuser.me/api/portraits/men/32.jpg",
            }}
            style={styles.driverImage}
          />

          <View style={{ flex: 1 }}>
            <Text
              style={styles.driverName}
            >
              Ravi Kumar
            </Text>

            <Text
              style={
                styles.driverRating
              }
            >
              ⭐ 4.9 • 1200 Trips
            </Text>
          </View>

          <TouchableOpacity
            style={styles.callButton}
          >
            <Text
              style={{
                color: "#fff",

                fontWeight: "700",
              }}
            >
              Call
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={styles.vehicleDetails}
        >
          <Text
            style={
              styles.vehicleNumber
            }
          >
            KA 05 MQ 4821
          </Text>

          <Text
            style={styles.vehicleModel}
          >
            White {vehicle?.name}
          </Text>
        </View>
      </View>

      {/* TRIP DETAILS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Trip Details
        </Text>

        <View style={styles.locationRow}>
          <View style={styles.pickDot} />

          <Text
            style={styles.locationText}
          >
            {pickupAddress}
          </Text>
        </View>

        <View
          style={
            styles.locationDivider
          }
        />

        <View style={styles.locationRow}>
          <View style={styles.dropDot} />

          <Text
            style={styles.locationText}
          >
            {dropAddress}
          </Text>
        </View>
      </View>

      {/* PRICE DETAILS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Price Details
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.label}>
            Ride Fare
          </Text>

          <Text style={styles.value}>
            {vehicle?.price}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.label}>
            Platform Fee
          </Text>

          <Text style={styles.value}>
            ₹10
          </Text>
        </View>

        <View
          style={styles.divider}
        />

        <View style={styles.priceRow}>
          <Text style={styles.total}>
            Total
          </Text>

          <Text style={styles.total}>
            ₹
            {parseInt(
              vehicle?.price.replace(
                "₹",
                ""
              )
            ) + 10}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 16,
  },

  successBox: {
    backgroundColor: "#DCFCE7",

    padding: 24,

    borderRadius: 24,

    alignItems: "center",

    marginBottom: 16,
  },

  emoji: {
    fontSize: 48,
  },

  successTitle: {
    marginTop: 12,

    fontSize: 24,

    fontWeight: "800",

    color: "#166534",
  },

  successSubTitle: {
    marginTop: 6,

    fontSize: 15,

    color: "#166534",
  },

  mapContainer: {
    height: 260,

    borderRadius: 24,

    overflow: "hidden",

    marginBottom: 16,
  },

  card: {
    backgroundColor: "#fff",

    borderRadius: 22,

    padding: 18,

    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 18,

    fontWeight: "800",

    marginBottom: 16,
  },

  otp: {
    fontSize: 42,

    fontWeight: "900",

    textAlign: "center",

    letterSpacing: 10,
  },

  otpText: {
    textAlign: "center",

    marginTop: 10,

    color: "#6B7280",
  },

  driverRow: {
    flexDirection: "row",

    alignItems: "center",
  },

  driverImage: {
    width: 64,

    height: 64,

    borderRadius: 32,

    marginRight: 14,
  },

  driverName: {
    fontSize: 18,

    fontWeight: "800",
  },

  driverRating: {
    marginTop: 4,

    color: "#6B7280",
  },

  callButton: {
    backgroundColor: "#111827",

    paddingHorizontal: 18,

    paddingVertical: 10,

    borderRadius: 14,
  },

  vehicleDetails: {
    marginTop: 18,

    backgroundColor: "#F3F4F6",

    padding: 14,

    borderRadius: 16,
  },

  vehicleNumber: {
    fontSize: 20,

    fontWeight: "800",
  },

  vehicleModel: {
    marginTop: 4,

    color: "#6B7280",
  },

  locationRow: {
    flexDirection: "row",

    alignItems: "center",
  },

  pickDot: {
    width: 12,

    height: 12,

    borderRadius: 6,

    backgroundColor: "#22C55E",

    marginRight: 12,
  },

  dropDot: {
    width: 12,

    height: 12,

    borderRadius: 6,

    backgroundColor: "#EF4444",

    marginRight: 12,
  },

  locationText: {
    flex: 1,

    lineHeight: 22,
  },

  locationDivider: {
    height: 30,

    width: 1,

    backgroundColor: "#D1D5DB",

    marginLeft: 5,

    marginVertical: 6,
  },

  priceRow: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    marginBottom: 14,
  },

  label: {
    color: "#6B7280",
  },

  value: {
    fontWeight: "700",
  },

  divider: {
    height: 1,

    backgroundColor: "#E5E7EB",

    marginVertical: 12,
  },

  total: {
    fontSize: 18,

    fontWeight: "800",
  },
});