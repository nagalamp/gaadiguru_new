import React from "react";

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  vehicles: any[];

  selectedVehicle: any;

  setSelectedVehicle: any;

  onBook: () => void;
};

export default function VehicleList({
  vehicles,

  selectedVehicle,

  setSelectedVehicle,

  onBook,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Available Vehicles
      </Text>

      <FlatList
        data={vehicles}
        keyExtractor={(item) =>
          item.id
        }
        showsVerticalScrollIndicator={
          false
        }
        renderItem={({ item }) => {
          const isSelected =
            selectedVehicle?.id ===
            item.id;

          return (
            <TouchableOpacity
              style={[
                styles.card,

                isSelected &&
                  styles.selectedCard,
              ]}
              onPress={() =>
                setSelectedVehicle(
                  item
                )
              }
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />

              <View style={styles.info}>
                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.time}>
                  Arrives in {item.time}
                </Text>
              </View>

              <Text style={styles.price}>
                {item.price}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {selectedVehicle && (
        <TouchableOpacity
          style={styles.bookButton}
          onPress={onBook}
        >
          <Text
            style={
              styles.bookButtonText
            }
          >
            Book Now •{" "}
            {selectedVehicle.name}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,

    paddingTop: 16,
  },

  title: {
    fontSize: 20,

    fontWeight: "800",

    color: "#111827",

    marginBottom: 14,
  },

  card: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#fff",

    padding: 14,

    borderRadius: 20,

    marginBottom: 14,

    elevation: 2,
  },

  selectedCard: {
    borderWidth: 2,

    borderColor: "#111827",
  },

  image: {
    width: 64,

    height: 64,
  },

  info: {
    flex: 1,

    marginLeft: 14,
  },

  name: {
    fontSize: 17,

    fontWeight: "700",

    color: "#111827",
  },

  time: {
    marginTop: 4,

    color: "#6B7280",
  },

  price: {
    fontSize: 20,

    fontWeight: "800",

    color: "#111827",
  },

  bookButton: {
    backgroundColor: "#111827",

    marginTop: 10,

    marginBottom: 20,

    paddingVertical: 18,

    borderRadius: 18,

    alignItems: "center",
  },

  bookButtonText: {
    color: "#fff",

    fontSize: 16,

    fontWeight: "700",
  },
});