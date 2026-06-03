import {
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import { theme } from "../theme";

const rideOptions = [
  {
    id: "Cab",

    icon: (
      <FontAwesome5
        name="car-side"
        size={24}
        color={theme.COLORS.primary}
      />
    ),

    subtitle: "City rides",
  },

  {
    id: "Auto",

    icon: (
      <MaterialCommunityIcons
        name="rickshaw"
        size={28}
        color={theme.COLORS.primary}
      />
    ),

    subtitle: "Affordable",
  },

  {
    id: "Bike",

    icon: (
      <MaterialCommunityIcons
        name="motorbike"
        size={28}
        color={theme.COLORS.primary}
      />
    ),

    subtitle: "Quick travel",
  },

  {
    id: "Truck",

    icon: (
      <MaterialCommunityIcons
        name="truck-fast"
        size={28}
        color={theme.COLORS.primary}
      />
    ),

    subtitle: "Heavy loads",
  },
];

export default function RideTypeSelector() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      {/* HEADING */}

      <Text style={styles.heading}>
        Choose your ride
      </Text>

      {/* RIDE OPTIONS */}

      <View style={styles.container}>
        {rideOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.9}
            style={styles.card}
            onPress={() =>
              router.push(
                "/map-screens/location-picker"
              )
            }
          >
            {/* ICON */}

            <View style={styles.iconWrapper}>
              <View style={styles.iconContainer}>
                {item.icon}
              </View>
            </View>

            {/* LABEL */}

            <Text style={styles.label}>
              {item.id}
            </Text>

            {/* SUBTITLE */}

            <Text style={styles.subtitle}>
              {item.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },

  heading: {
    fontSize: 18,

    textAlign: "center",

    color: theme.COLORS.text,

    fontFamily: theme.FONTS.bold,

    marginBottom: 12,
  },

  container: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  card: {
    flex: 1,

    backgroundColor:
      theme.COLORS.background,

    borderRadius: 18,

    paddingVertical: 8,

    marginHorizontal: 4,

    alignItems: "center",

    justifyContent: "center",

    borderWidth: 1,

    borderColor:
      theme.COLORS.border,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.04,

    shadowRadius: 6,

    elevation: 2,
  },

  iconWrapper: {
    marginBottom: 6,

    justifyContent: "center",

    alignItems: "center",
  },

  iconContainer: {
    width: 48,

    height: 48,

    borderRadius: 16,

    backgroundColor:
      theme.COLORS.card,

    justifyContent: "center",

    alignItems: "center",
  },

  label: {
    fontSize: 13,

    textAlign: "center",

    color: theme.COLORS.text,

    fontFamily:
      theme.FONTS.bold,

    marginBottom: 1,
  },

  subtitle: {
    fontSize: 9,

    textAlign: "center",

    color:
      theme.COLORS.textSecondary,

    fontFamily:
      theme.FONTS.medium,
  },
});