import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  
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
  
      backgroundColor: "#F4DE7A",
  
      borderRadius: 18,
  
      flexDirection: "row",
  
      padding: 5,
  
      marginBottom: 24,
    },
  
    tab: {
      flex: 1,
  
      justifyContent: "center",
  
      alignItems: "center",
  
      borderRadius: 14,
    },
  
    activeTab: {
      backgroundColor: "#111111",
    },
  
    tabText: {
      fontSize: 15,
  
      color: "#5C5130",
  
      fontFamily: "Comfortaa_700Bold",
    },
  
    activeTabText: {
      color: "#EBCF59",
    },
  });