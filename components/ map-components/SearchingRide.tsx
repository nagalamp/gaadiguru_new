import React from "react";

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  vehicle: any;
};

export default function SearchingRide({
  vehicle,
}: Props) {
  return (
    <View style={styles.container}>
      {/* TOP ANIMATION AREA */}
      <View style={styles.animationContainer}>
        {/* PULSE CIRCLE */}
        <View style={styles.outerCircle}>
          <View
            style={styles.middleCircle}
          >
            <View
              style={styles.innerCircle}
            >
              <Image
                source={{
                  uri:
                    vehicle?.image,
                }}
                style={
                  styles.vehicleImage
                }
              />
            </View>
          </View>
        </View>

        <ActivityIndicator
          size="large"
          color="#111827"
          style={styles.loader}
        />
      </View>

      {/* TEXT */}
      <Text style={styles.title}>
        Searching Nearby Drivers
      </Text>

      <Text style={styles.subtitle}>
        Sit tight while we connect
        you with the nearest driver
      </Text>

      {/* VEHICLE CARD */}
      <View style={styles.card}>
        <View
          style={styles.imageContainer}
        >
          <Image
            source={{
              uri:
                vehicle?.image,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            {vehicle?.name}
          </Text>

          <Text style={styles.time}>
            Arriving Soon
          </Text>
        </View>

        <View
          style={styles.priceContainer}
        >
          <Text style={styles.price}>
            {vehicle?.price}
          </Text>

          <Text style={styles.fareText}>
            Estimated
          </Text>
        </View>
      </View>

      {/* STATUS */}
      <View style={styles.statusBox}>
        <View style={styles.dot} />

        <Text style={styles.statusText}>
          Looking for nearby drivers...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F8FAFC",

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 24,
  },

  animationContainer: {
    justifyContent: "center",

    alignItems: "center",

    marginBottom: 30,
  },

  outerCircle: {
    width: 220,

    height: 220,

    borderRadius: 110,

    backgroundColor:
      "rgba(37,99,235,0.08)",

    justifyContent: "center",

    alignItems: "center",
  },

  middleCircle: {
    width: 170,

    height: 170,

    borderRadius: 85,

    backgroundColor:
      "rgba(37,99,235,0.12)",

    justifyContent: "center",

    alignItems: "center",
  },

  innerCircle: {
    width: 120,

    height: 120,

    borderRadius: 60,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 6,
  },

  vehicleImage: {
    width: 80,

    height: 80,
  },

  loader: {
    position: "absolute",

    bottom: -20,
  },

  title: {
    fontSize: 28,

    fontWeight: "900",

    color: "#0F172A",

    textAlign: "center",
  },

  subtitle: {
    marginTop: 12,

    fontSize: 16,

    color: "#64748B",

    textAlign: "center",

    lineHeight: 24,

    paddingHorizontal: 10,
  },

  card: {
    marginTop: 40,

    width: "100%",

    backgroundColor: "#FFFFFF",

    borderRadius: 28,

    padding: 18,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.06,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 4,
  },

  imageContainer: {
    width: 80,

    height: 80,

    borderRadius: 22,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",

    alignItems: "center",
  },

  image: {
    width: 60,

    height: 60,
  },

  info: {
    flex: 1,

    marginLeft: 16,
  },

  name: {
    fontSize: 20,

    fontWeight: "800",

    color: "#0F172A",
  },

  time: {
    marginTop: 6,

    fontSize: 14,

    color: "#64748B",

    fontWeight: "600",
  },

  priceContainer: {
    alignItems: "flex-end",
  },

  price: {
    fontSize: 22,

    fontWeight: "900",

    color: "#111827",
  },

  fareText: {
    marginTop: 4,

    fontSize: 12,

    color: "#94A3B8",
  },

  statusBox: {
    marginTop: 28,

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFFFFF",

    paddingHorizontal: 18,

    paddingVertical: 14,

    borderRadius: 50,

    shadowColor: "#000",

    shadowOpacity: 0.04,

    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  dot: {
    width: 10,

    height: 10,

    borderRadius: 5,

    backgroundColor: "#22C55E",

    marginRight: 10,
  },

  statusText: {
    fontSize: 14,

    color: "#475569",

    fontWeight: "600",
  },
});