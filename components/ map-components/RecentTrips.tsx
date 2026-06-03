// app/components/RecentTrips.tsx

import React from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const RECENT_TRIPS = [
  {
    id: "1",

    title: "Home",

    address:
      "Global Village Tech Park, Bangalore",

    icon: "home",
  },

  {
    id: "2",

    title: "Office",

    address:
      "Electronic City Phase 1, Bangalore",

    icon: "briefcase",
  },

  {
    id: "3",

    title: "Airport",

    address:
      "Kempegowda International Airport",

    icon: "airplane",
  },

  {
    id: "4",

    title: "Mall",

    address:
      "Orion Mall, Rajajinagar",

    icon: "shopping",
  },
];

type Props = {
  onSelect: (
    address: string
  ) => void;
};

export default function RecentTrips({
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Recent Trips
        </Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={RECENT_TRIPS}
        keyExtractor={(item) =>
          item.id
        }
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}
            onPress={() =>
              onSelect(item.address)
            }
          >
            {/* ICON */}
            <View
              style={styles.iconContainer}
            >
              {item.icon ===
                "briefcase" ? (
                <Ionicons
                  name="briefcase"
                  size={20}
                  color="#111827"
                />
              ) : item.icon ===
                "airplane" ? (
                <Ionicons
                  name="airplane"
                  size={20}
                  color="#111827"
                />
              ) : item.icon ===
                "shopping" ? (
                <Ionicons
                  name="cart"
                  size={20}
                  color="#111827"
                />
              ) : (
                <Ionicons
                  name="home"
                  size={20}
                  color="#111827"
                />
              )}
            </View>

            {/* INFO */}
            <View style={styles.info}>
              <Text style={styles.name}>
                {item.title}
              </Text>

              <Text
                style={styles.address}
                numberOfLines={1}
              >
                {item.address}
              </Text>
            </View>

            {/* RIGHT ICON */}
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={22}
              color="#94A3B8"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,

    paddingHorizontal: 18,
  },

  header: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    alignItems: "center",

    marginBottom: 16,
  },

  title: {
    fontSize: 22,

    fontWeight: "900",

    color: "#111827",
  },

  seeAll: {
    fontSize: 14,

    fontWeight: "700",

    color: "#64748B",
  },

  card: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFFFFF",

    padding: 18,

    borderRadius: 24,

    marginBottom: 14,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.05,

    shadowRadius: 10,

    elevation: 4,
  },

  iconContainer: {
    width: 56,

    height: 56,

    borderRadius: 18,

    backgroundColor: "#FFF3BF",

    justifyContent: "center",

    alignItems: "center",
  },

  info: {
    flex: 1,

    marginLeft: 16,
  },

  name: {
    fontSize: 17,

    fontWeight: "800",

    color: "#111827",
  },

  address: {
    marginTop: 6,

    fontSize: 14,

    color: "#64748B",

    lineHeight: 20,
  },
});