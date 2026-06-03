// app/map-screens/drop-location.tsx

import React, {
  useState,
} from "react";

import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

import LocationInput, {
  LocationType,
} from "./location-input";

import RouteMap from "../../components/RouteMap";

const VEHICLES = [
  {
    id: "1",

    name: "Mini",

    price: "₹120",

    time: "2 mins",

    image:
      "https://cdn-icons-png.flaticon.com/512/744/744465.png",
  },

  {
    id: "2",

    name: "Sedan",

    price: "₹180",

    time: "4 mins",

    image:
      "https://cdn-icons-png.flaticon.com/512/3774/3774278.png",
  },

  {
    id: "3",

    name: "SUV",

    price: "₹260",

    time: "5 mins",

    image:
      "https://cdn-icons-png.flaticon.com/512/3085/3085330.png",
  },

  {
    id: "4",

    name: "Auto",

    price: "₹90",

    time: "1 min",

    image:
      "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
  },
];

export default function DropLocationScreen() {
  const [pickupAddress, setPickupAddress] =
    useState("");

  const [dropAddress, setDropAddress] =
    useState("");

  const [
    pickupLocation,
    setPickupLocation,
  ] = useState<LocationType | null>(
    null
  );

  const [
    dropLocation,
    setDropLocation,
  ] = useState<LocationType | null>(
    null
  );

  const [showMap, setShowMap] =
    useState(false);

  const [
    selectedVehicle,
    setSelectedVehicle,
  ] = useState<any>(null);

  const [
    searchingRide,
    setSearchingRide,
  ] = useState(false);

  const [
    rideConfirmed,
    setRideConfirmed,
  ] = useState(false);

  const handlePickupSelect = (
    location: LocationType
  ) => {
    setPickupAddress(
      location.address
    );

    setPickupLocation(location);

    if (dropLocation) {
      setShowMap(true);
    }
  };

  const handleDropSelect = (
    location: LocationType
  ) => {
    setDropAddress(
      location.address
    );

    setDropLocation(location);

    if (pickupLocation) {
      setShowMap(true);
    }
  };

  const handleBookRide = () => {
    setSearchingRide(true);

    setTimeout(() => {
      setSearchingRide(false);

      setRideConfirmed(true);
    }, 3500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      {/* INPUTS */}
      <View style={styles.inputContainer}>
        <LocationInput
          //label="Pickup Address"
          placeholder="Pickup location"
          value={pickupAddress}
          onChangeText={setPickupAddress}
          onSelect={
            handlePickupSelect
          }
        />

        <LocationInput
          //label="Drop Location"
          placeholder="Drop location"
          value={dropAddress}
          onChangeText={setDropAddress}
          onSelect={
            handleDropSelect
          }
        />
      </View>

      {/* MODAL */}
      <Modal
        visible={
          showMap &&
          !!pickupLocation &&
          !!dropLocation
        }
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() =>
          setShowMap(false)
        }
      >
        <SafeAreaView
          style={styles.modalContainer}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>
              Choose Your Ride
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                setShowMap(false)
              }
            >
              <Text
                style={
                  styles.closeText
                }
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>

          {/* MAP */}
          {pickupLocation &&
            dropLocation && (
              <View
                style={
                  styles.mapContainer
                }
              >
                <RouteMap
                  pickupLocation={
                    pickupLocation
                  }
                  dropLocation={
                    dropLocation
                  }
                />
              </View>
            )}

          {/* VEHICLE LIST */}
          {!searchingRide &&
            !rideConfirmed && (
              <View
                style={
                  styles.vehicleContainer
                }
              >
                <Text
                  style={
                    styles.vehicleTitle
                  }
                >
                  Available Vehicles
                </Text>

                <FlatList
                  data={VEHICLES}
                  keyExtractor={(
                    item
                  ) => item.id}
                  showsVerticalScrollIndicator={
                    false
                  }
                  renderItem={({
                    item,
                  }) => {
                    const isSelected =
                      selectedVehicle?.id ===
                      item.id;

                    return (
                      <TouchableOpacity
                        activeOpacity={
                          0.9
                        }
                        style={[
                          styles.vehicleCard,

                          isSelected &&
                            styles.selectedVehicleCard,
                        ]}
                        onPress={() =>
                          setSelectedVehicle(
                            item
                          )
                        }
                      >
                        {/* LEFT */}
                        <View
                          style={
                            styles.vehicleLeft
                          }
                        >
                          <View
                            style={[
                              styles.vehicleImageContainer,

                              isSelected &&
                                styles.selectedVehicleImageContainer,
                            ]}
                          >
                            <Image
                              source={{
                                uri:
                                  item.image,
                              }}
                              style={
                                styles.vehicleImage
                              }
                              resizeMode="contain"
                            />
                          </View>

                          <View
                            style={
                              styles.vehicleInfo
                            }
                          >
                            <View
                              style={
                                styles.vehicleTopRow
                              }
                            >
                              <Text
                                style={
                                  styles.vehicleName
                                }
                              >
                                {
                                  item.name
                                }
                              </Text>

                              {isSelected && (
                                <View
                                  style={
                                    styles.selectedBadge
                                  }
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

                            <View
                              style={
                                styles.metaRow
                              }
                            >
                              <View
                                style={
                                  styles.metaItem
                                }
                              >
                                <Ionicons
                                  name="time-outline"
                                  size={
                                    14
                                  }
                                  color="#64748B"
                                />

                                <Text
                                  style={
                                    styles.metaText
                                  }
                                >
                                  {
                                    item.time
                                  }
                                </Text>
                              </View>

                              <View
                                style={
                                  styles.metaItem
                                }
                              >
                                <MaterialCommunityIcons
                                  name="map-marker-distance"
                                  size={
                                    14
                                  }
                                  color="#64748B"
                                />

                                <Text
                                  style={
                                    styles.metaText
                                  }
                                >
                                  Nearby
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>

                        {/* PRICE */}
                        <View
                          style={
                            styles.vehiclePriceContainer
                          }
                        >
                          <Text
                            style={
                              styles.vehiclePrice
                            }
                          >
                            {
                              item.price
                            }
                          </Text>

                          <Text
                            style={
                              styles.vehicleFareText
                            }
                          >
                            Estimated
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />

                {/* BOOK BUTTON */}
                {selectedVehicle && (
                  <TouchableOpacity
                    activeOpacity={
                      0.9
                    }
                    style={
                      styles.bookButton
                    }
                    onPress={
                      handleBookRide
                    }
                  >
                    <Text
                      style={
                        styles.bookButtonText
                      }
                    >
                      Confirm Ride
                    </Text>

                    <Ionicons
                      name="arrow-forward"
                      size={20}
                      color="#111827"
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}

          {/* SEARCHING */}
          {searchingRide && (
            <View
              style={
                styles.searchingContainer
              }
            >
              <View
                style={
                  styles.outerCircle
                }
              >
                <View
                  style={
                    styles.middleCircle
                  }
                >
                  <View
                    style={
                      styles.innerCircle
                    }
                  >
                    <Image
                      source={{
                        uri:
                          selectedVehicle?.image,
                      }}
                      style={
                        styles.searchVehicleImage
                      }
                    />
                  </View>
                </View>
              </View>

              <ActivityIndicator
                size="large"
                color="#111827"
                style={{
                  marginTop: 20,
                }}
              />

              <Text
                style={
                  styles.searchingTitle
                }
              >
                Searching Nearby Drivers
              </Text>

              <Text
                style={
                  styles.searchingSubtitle
                }
              >
                Connecting you with the
                nearest driver...
              </Text>

              <View
                style={
                  styles.searchingVehicleCard
                }
              >
                <Image
                  source={{
                    uri:
                      selectedVehicle?.image,
                  }}
                  style={
                    styles.searchingVehicleImage
                  }
                />

                <View
                  style={{ flex: 1 }}
                >
                  <Text
                    style={
                      styles.searchingVehicleName
                    }
                  >
                    {
                      selectedVehicle?.name
                    }
                  </Text>

                  <Text
                    style={
                      styles.searchingVehiclePrice
                    }
                  >
                    {
                      selectedVehicle?.price
                    }
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* CONFIRMED */}
          {rideConfirmed && (
            <ScrollView
              style={
                styles.rideContainer
              }
              showsVerticalScrollIndicator={
                false
              }
            >
              {/* SUCCESS */}
              <View
                style={
                  styles.successBox
                }
              >
                <Text
                  style={
                    styles.successEmoji
                  }
                >
                  🚖
                </Text>

                <Text
                  style={
                    styles.successTitle
                  }
                >
                  Ride Confirmed
                </Text>

                <Text
                  style={
                    styles.successSubTitle
                  }
                >
                  Driver arriving in 3
                  mins
                </Text>
              </View>

              {/* OTP */}
              <View
                style={styles.card}
              >
                <Text
                  style={
                    styles.cardTitle
                  }
                >
                  Ride OTP
                </Text>

                <Text
                  style={styles.otp}
                >
                  4821
                </Text>

                <Text
                  style={
                    styles.otpText
                  }
                >
                  Share this OTP with
                  driver
                </Text>
              </View>

              {/* DRIVER */}
              <View
                style={styles.card}
              >
                <Text
                  style={
                    styles.cardTitle
                  }
                >
                  Driver Details
                </Text>

                <View
                  style={
                    styles.driverRow
                  }
                >
                  <Image
                    source={{
                      uri:
                        "https://randomuser.me/api/portraits/men/32.jpg",
                    }}
                    style={
                      styles.driverImage
                    }
                  />

                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Text
                      style={
                        styles.driverName
                      }
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
                    style={
                      styles.callButton
                    }
                  >
                    <Ionicons
                      name="call"
                      size={18}
                      color="#111827"
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={
                    styles.vehicleDetails
                  }
                >
                  <Text
                    style={
                      styles.vehicleNumber
                    }
                  >
                    KA 05 MQ 4821
                  </Text>

                  <Text
                    style={
                      styles.vehicleModel
                    }
                  >
                    White{" "}
                    {
                      selectedVehicle?.name
                    }
                  </Text>
                </View>
              </View>

              {/* TRIP DETAILS */}
              <View
                style={styles.card}
              >
                <Text
                  style={
                    styles.cardTitle
                  }
                >
                  Trip Details
                </Text>

                <View
                  style={
                    styles.locationRow
                  }
                >
                  <View
                    style={
                      styles.pickDot
                    }
                  />

                  <Text
                    style={
                      styles.locationText
                    }
                  >
                    {pickupAddress}
                  </Text>
                </View>

                <View
                  style={
                    styles.locationDivider
                  }
                />

                <View
                  style={
                    styles.locationRow
                  }
                >
                  <View
                    style={
                      styles.dropDot
                    }
                  />

                  <Text
                    style={
                      styles.locationText
                    }
                  >
                    {dropAddress}
                  </Text>
                </View>
              </View>

              {/* PRICE */}
              <View
                style={styles.card}
              >
                <Text
                  style={
                    styles.cardTitle
                  }
                >
                  Price Details
                </Text>

                <View
                  style={
                    styles.priceRow
                  }
                >
                  <Text
                    style={
                      styles.priceLabel
                    }
                  >
                    Ride Fare
                  </Text>

                  <Text
                    style={
                      styles.priceValue
                    }
                  >
                    {
                      selectedVehicle?.price
                    }
                  </Text>
                </View>

                <View
                  style={
                    styles.priceRow
                  }
                >
                  <Text
                    style={
                      styles.priceLabel
                    }
                  >
                    Platform Fee
                  </Text>

                  <Text
                    style={
                      styles.priceValue
                    }
                  >
                    ₹10
                  </Text>
                </View>

                <View
                  style={
                    styles.priceDivider
                  }
                />

                <View
                  style={
                    styles.priceRow
                  }
                >
                  <Text
                    style={
                      styles.totalText
                    }
                  >
                    Total
                  </Text>

                  <Text
                    style={
                      styles.totalPrice
                    }
                  >
                    ₹
                    {parseInt(
                      selectedVehicle?.price.replace(
                        "₹",
                        ""
                      )
                    ) + 10}
                  </Text>
                </View>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F8FAFC",
  },

  inputContainer: {
    paddingHorizontal: 18,

    paddingTop: 12,

    gap: 14,
  },

  modalContainer: {
    flex: 1,

    backgroundColor: "#F8FAFC",
  },

  header: {
    height: 70,

    flexDirection: "row",

    alignItems: "center",

    justifyContent:
      "space-between",

    paddingHorizontal: 22,

    backgroundColor: "#FFFFFF",

    borderBottomWidth: 1,

    borderBottomColor:
      "#EEF2F7",
  },

  title: {
    fontSize: 24,

    fontWeight: "900",

    color: "#111827",
  },

  closeText: {
    fontSize: 14,

    fontWeight: "800",

    color: "#111827",

    backgroundColor: "#FFDE59",

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderRadius: 16,
  },

  mapContainer: {
    height: "38%",

    borderBottomLeftRadius: 28,

    borderBottomRightRadius: 28,

    overflow: "hidden",
  },

  vehicleContainer: {
    flex: 1,

    paddingHorizontal: 18,

    paddingTop: 20,
  },

  vehicleTitle: {
    fontSize: 28,

    fontWeight: "900",

    color: "#111827",

    marginBottom: 18,
  },

  vehicleCard: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent:
      "space-between",

    backgroundColor: "#FFFFFF",

    borderRadius: 28,

    padding: 18,

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

  selectedVehicleCard: {
    backgroundColor: "#FFFBEA",

    borderColor: "#FFDE59",
  },

  vehicleLeft: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  vehicleImageContainer: {
    width: 82,

    height: 82,

    borderRadius: 24,

    backgroundColor: "#F1F5F9",

    justifyContent: "center",

    alignItems: "center",
  },

  selectedVehicleImageContainer:
    {
      backgroundColor:
        "#FFF3BF",
    },

  vehicleImage: {
    width: 60,

    height: 60,
  },

  vehicleInfo: {
    flex: 1,

    marginLeft: 16,
  },

  vehicleTopRow: {
    flexDirection: "row",

    alignItems: "center",
  },

  vehicleName: {
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

  vehiclePriceContainer: {
    alignItems: "flex-end",
  },

  vehiclePrice: {
    fontSize: 24,

    fontWeight: "900",

    color: "#111827",
  },

  vehicleFareText: {
    marginTop: 4,

    fontSize: 12,

    color: "#94A3B8",
  },

  bookButton: {
    backgroundColor: "#FFDE59",

    marginTop: 12,

    marginBottom: 24,

    paddingVertical: 20,

    borderRadius: 24,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",
  },

  bookButtonText: {
    color: "#111827",

    fontSize: 17,

    fontWeight: "900",

    marginRight: 8,
  },

  searchingContainer: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 26,
  },

  outerCircle: {
    width: 220,

    height: 220,

    borderRadius: 110,

    backgroundColor:
      "rgba(255,222,89,0.15)",

    justifyContent: "center",

    alignItems: "center",
  },

  middleCircle: {
    width: 170,

    height: 170,

    borderRadius: 85,

    backgroundColor:
      "rgba(255,222,89,0.25)",

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
  },

  searchVehicleImage: {
    width: 80,

    height: 80,
  },

  searchingTitle: {
    marginTop: 28,

    fontSize: 28,

    fontWeight: "900",

    color: "#111827",

    textAlign: "center",
  },

  searchingSubtitle: {
    marginTop: 10,

    fontSize: 16,

    color: "#64748B",

    textAlign: "center",

    lineHeight: 24,
  },

  searchingVehicleCard: {
    marginTop: 40,

    backgroundColor: "#FFFFFF",

    borderRadius: 30,

    padding: 22,

    width: "100%",

    flexDirection: "row",

    alignItems: "center",
  },

  searchingVehicleImage: {
    width: 76,

    height: 76,

    marginRight: 20,
  },

  searchingVehicleName: {
    fontSize: 22,

    fontWeight: "900",

    color: "#111827",
  },

  searchingVehiclePrice: {
    marginTop: 6,

    fontSize: 16,

    color: "#64748B",
  },

  rideContainer: {
    flex: 1,

    padding: 18,
  },

  successBox: {
    backgroundColor: "#FFFBEA",

    padding: 28,

    borderRadius: 32,

    alignItems: "center",

    marginBottom: 18,

    borderWidth: 1,

    borderColor: "#FFDE59",
  },

  successEmoji: {
    fontSize: 52,
  },

  successTitle: {
    marginTop: 14,

    fontSize: 28,

    fontWeight: "900",

    color: "#111827",
  },

  successSubTitle: {
    marginTop: 8,

    fontSize: 16,

    color: "#64748B",
  },

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 30,

    padding: 20,

    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 20,

    fontWeight: "900",

    color: "#111827",

    marginBottom: 18,
  },

  otp: {
    fontSize: 48,

    fontWeight: "900",

    color: "#111827",

    letterSpacing: 12,

    textAlign: "center",
  },

  otpText: {
    marginTop: 12,

    textAlign: "center",

    color: "#64748B",
  },

  driverRow: {
    flexDirection: "row",

    alignItems: "center",
  },

  driverImage: {
    width: 70,

    height: 70,

    borderRadius: 35,

    marginRight: 16,
  },

  driverName: {
    fontSize: 20,

    fontWeight: "900",

    color: "#111827",
  },

  driverRating: {
    marginTop: 5,

    color: "#64748B",
  },

  callButton: {
    width: 52,

    height: 52,

    borderRadius: 18,

    backgroundColor: "#FFDE59",

    justifyContent: "center",

    alignItems: "center",
  },

  vehicleDetails: {
    marginTop: 20,

    backgroundColor: "#F8FAFC",

    padding: 16,

    borderRadius: 20,
  },

  vehicleNumber: {
    fontSize: 22,

    fontWeight: "900",

    color: "#111827",
  },

  vehicleModel: {
    marginTop: 6,

    color: "#64748B",
  },

  locationRow: {
    flexDirection: "row",

    alignItems: "flex-start",
  },

  pickDot: {
    width: 14,

    height: 14,

    borderRadius: 7,

    backgroundColor: "#22C55E",

    marginRight: 14,

    marginTop: 4,
  },

  dropDot: {
    width: 14,

    height: 14,

    borderRadius: 7,

    backgroundColor: "#EF4444",

    marginRight: 14,

    marginTop: 4,
  },

  locationText: {
    flex: 1,

    fontSize: 15,

    color: "#111827",

    lineHeight: 24,
  },

  locationDivider: {
    height: 34,

    width: 2,

    backgroundColor: "#E2E8F0",

    marginLeft: 6,

    marginVertical: 8,
  },

  priceRow: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    marginBottom: 16,
  },

  priceLabel: {
    fontSize: 15,

    color: "#64748B",

    fontWeight: "600",
  },

  priceValue: {
    fontSize: 16,

    fontWeight: "800",

    color: "#111827",
  },

  priceDivider: {
    height: 1,

    backgroundColor: "#EEF2F7",

    marginVertical: 14,
  },

  totalText: {
    fontSize: 20,

    fontWeight: "900",

    color: "#111827",
  },

  totalPrice: {
    fontSize: 22,

    fontWeight: "900",

    color: "#111827",
  },
});