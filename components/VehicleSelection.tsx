// app/map-screens/VehicleSelection.tsx

import React, { useState } from "react";

import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

type VehicleType = {
  id: string;
  name: string;
  price: string;
  time: string;
  image: string;
  capacity: string;
};

const VEHICLES: VehicleType[] = [
  {
    id: "1",
    name: "Bike",
    price: "₹89",
    time: "2 mins away",
    capacity: "1 Seat",
    image:
      "https://img.icons8.com/color/96/motorcycle.png",
  },

  {
    id: "2",
    name: "Auto",
    price: "₹140",
    time: "3 mins away",
    capacity: "3 Seats",
    image:
      "https://img.icons8.com/color/96/auto-rickshaw.png",
  },

  {
    id: "3",
    name: "Mini",
    price: "₹220",
    time: "4 mins away",
    capacity: "4 Seats",
    image:
      "https://img.icons8.com/color/96/car.png",
  },

  {
    id: "4",
    name: "Sedan",
    price: "₹340",
    time: "5 mins away",
    capacity: "4 Seats",
    image:
      "https://img.icons8.com/color/96/sedan.png",
  },

  {
    id: "5",
    name: "SUV",
    price: "₹480",
    time: "6 mins away",
    capacity: "6 Seats",
    image:
      "https://img.icons8.com/color/96/suv.png",
  },
];

export default function VehicleSelection() {
  const [
    selectedVehicle,
    setSelectedVehicle,
  ] = useState<string | null>(
    null
  );

  const renderItem = ({
    item,
  }: {
    item: VehicleType;
  }) => {
    const isSelected =
      selectedVehicle === item.id;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          setSelectedVehicle(
            item.id
          )
        }
        style={[
          styles.card,

          isSelected &&
            styles.selectedCard,
        ]}
      >
        {/* LEFT */}
        <View style={styles.left}>
          {/* IMAGE */}
          <View
            style={[
              styles.imageContainer,

              isSelected &&
                styles.selectedImageContainer,
            ]}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* DETAILS */}
          <View style={styles.info}>
            <View style={styles.topRow}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              {isSelected && (
                <View
                  style={styles.selectedBadge}
                >
                  <Text
                    style={
                      styles.selectedBadgeText
                    }
                  >
                    Selected
                  </Text>
                </View>
              )}
            </View>

            {/* META */}
            <View style={styles.metaRow}>
              <View
                style={
                  styles.metaItem
                }
              >
                <Ionicons
                  name="time-outline"
                  size={14}
                  color="#64748B"
                />

                <Text
                  style={
                    styles.metaText
                  }
                >
                  {item.time}
                </Text>
              </View>

              <View
                style={
                  styles.metaItem
                }
              >
                <MaterialCommunityIcons
                  name="seat-passenger"
                  size={14}
                  color="#64748B"
                />

                <Text
                  style={
                    styles.metaText
                  }
                >
                  {item.capacity}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* PRICE */}
        <View
          style={styles.priceContainer}
        >
          <Text style={styles.price}>
            {item.price}
          </Text>

          <Text
            style={styles.fareText}
          >
            Estimated
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          Choose Your Ride
        </Text>

        <Text
          style={styles.subHeading}
        >
          Premium rides at affordable
          prices
        </Text>
      </View>

      {/* LIST */}
      <FlatList
        data={VEHICLES}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={renderItem}
        contentContainerStyle={
          styles.listContainer
        }
        showsVerticalScrollIndicator={
          false
        }
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={!selectedVehicle}
          style={[
            styles.bookButton,

            !selectedVehicle && {
              opacity: 0.5,
            },
          ]}
        >
          <Text
            style={styles.bookButtonText}
          >
            Confirm Ride
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#111827"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F8FAFC",
  },

  /* HEADER */
  header: {
    paddingHorizontal: 22,

    paddingTop: 10,

    paddingBottom: 20,
  },

  heading: {
    fontSize: 30,

    fontWeight: "900",

    color: "#111827",

    letterSpacing: 0.3,
  },

  subHeading: {
    marginTop: 8,

    fontSize: 15,

    color: "#64748B",

    lineHeight: 22,
  },

  /* LIST */
  listContainer: {
    paddingHorizontal: 18,

    paddingBottom: 150,
  },

  /* CARD */
  card: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent:
      "space-between",

    backgroundColor: "#FFFFFF",

    borderRadius: 28,

    padding: 16,

    marginBottom: 16,

    borderWidth: 1,

    borderColor: "#EEF2F7",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.05,

    shadowRadius: 12,

    elevation: 4,
  },

  selectedCard: {
    backgroundColor: "#FFFBEA",

    borderColor: "#FFDE59",

    shadowOpacity: 0.08,
  },

  left: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  imageContainer: {
    width: 82,

    height: 82,

    borderRadius: 24,

    backgroundColor: "#F1F5F9",

    justifyContent: "center",

    alignItems: "center",
  },

  selectedImageContainer: {
    backgroundColor: "#FFF3BF",
  },

  image: {
    width: 60,

    height: 60,
  },

  info: {
    flex: 1,

    marginLeft: 16,
  },

  topRow: {
    flexDirection: "row",

    alignItems: "center",

    flexWrap: "wrap",
  },

  name: {
    fontSize: 20,

    fontWeight: "800",

    color: "#111827",
  },

  selectedBadge: {
    marginLeft: 10,

    backgroundColor: "#111827",

    paddingHorizontal: 12,

    paddingVertical: 5,

    borderRadius: 20,
  },

  selectedBadgeText: {
    color: "#FFFFFF",

    fontSize: 11,

    fontWeight: "700",
  },

  metaRow: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 10,
  },

  metaItem: {
    flexDirection: "row",

    alignItems: "center",

    marginRight: 18,
  },

  metaText: {
    marginLeft: 5,

    fontSize: 13,

    fontWeight: "600",

    color: "#64748B",
  },

  /* PRICE */
  priceContainer: {
    alignItems: "flex-end",

    marginLeft: 10,
  },

  price: {
    fontSize: 24,

    fontWeight: "900",

    color: "#111827",
  },

  fareText: {
    marginTop: 4,

    fontSize: 12,

    color: "#94A3B8",

    fontWeight: "600",
  },

  /* FOOTER */
  footer: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "#FFFFFF",

    paddingHorizontal: 18,

    paddingTop: 14,

    paddingBottom: 26,

    borderTopWidth: 1,

    borderTopColor: "#EEF2F7",
  },

  bookButton: {
    backgroundColor: "#FFDE59",

    borderRadius: 22,

    paddingVertical: 18,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.08,

    shadowRadius: 10,

    elevation: 4,
  },

  bookButtonText: {
    color: "#111827",

    fontSize: 17,

    fontWeight: "800",

    marginRight: 8,

    letterSpacing: 0.3,
  },
});