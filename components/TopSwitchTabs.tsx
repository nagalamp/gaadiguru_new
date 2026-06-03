import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { theme } from "../theme";

type Props = {
  activeTab: string;

  setActiveTab: (tab: string) => void;
};

export default function TopSwitchTabs({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <View style={styles.container}>
      {/* BOOK */}

      <TouchableOpacity
        style={[
          styles.tab,

          activeTab === "book" &&
            styles.activeTab,
        ]}
        onPress={() => setActiveTab("book")}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.tabText,

            activeTab === "book" &&
              styles.activeTabText,
          ]}
        >
          Book
        </Text>
      </TouchableOpacity>

      {/* PARCEL */}

      <TouchableOpacity
        style={[
          styles.tab,

          activeTab === "parcel" &&
            styles.activeTab,
        ]}
        onPress={() =>
          setActiveTab("parcel")
        }
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.tabText,

            activeTab === "parcel" &&
              styles.activeTabText,
          ]}
        >
          Parcel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,

    backgroundColor:
      theme.COLORS.card,

    borderRadius: 18,

    flexDirection: "row",

    padding: 5,

    marginTop: 2,

    marginBottom: 0,
  },

  tab: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    borderRadius: 14,
  },

  activeTab: {
    backgroundColor:
      theme.COLORS.primary,
  },

  tabText: {
    fontSize: 16,

    fontWeight: "700",

    color:
      theme.COLORS.textSecondary,

    fontFamily:
      theme.FONTS.bold,
  },

  activeTabText: {
    color:
      theme.COLORS.background,

    fontWeight: "700",
  },
});