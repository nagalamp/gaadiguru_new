import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
  } from "react-native";
  
  import Carousel from "react-native-reanimated-carousel";
  
  import { theme } from "../theme";
  
  const { width } = Dimensions.get("window");
  
  const banners = [
    {
      id: 1,
  
      title: "Get 20% OFF",
  
      subtitle:
        "On your first 3 rides with GaadiGuru",
  
      code: "GG20",
    },
  
    {
      id: 2,
  
      title: "Free Parcel Delivery",
  
      subtitle:
        "Free delivery up to 5km this weekend",
  
      code: "FREE5",
    },
  
    {
      id: 3,
  
      title: "Ride & Earn",
  
      subtitle:
        "Refer friends and earn ride credits",
  
      code: "REFER50",
    },
  ];
  
  export default function AdsBanner() {
    return (
      <View style={styles.wrapper}>
        <Carousel
          loop
          autoPlay
          width={width - 32}
          height={130}
          data={banners}
          scrollAnimationDuration={1000}
          autoPlayInterval={3500}
          renderItem={({ item }) => (
            <View style={styles.container}>
              {/* LEFT CONTENT */}
  
              <View style={styles.content}>
                <Text
                  numberOfLines={1}
                  style={styles.title}
                >
                  {item.title}
                </Text>
  
                <Text
                  numberOfLines={2}
                  style={styles.subtitle}
                >
                  {item.subtitle}
                </Text>
  
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {item.code}
                  </Text>
                </View>
              </View>
  
              {/* RIGHT IMAGE */}
  
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      marginTop: 6,
    },
  
    container: {
      height: 130,
  
      backgroundColor:
        theme.COLORS.primary,
  
      borderRadius: 10,
  
      paddingHorizontal: 16,
  
      paddingVertical: 14,
  
      flexDirection: "row",
  
      alignItems: "center",
  
      justifyContent: "space-between",
  
      overflow: "hidden",
    },
  
    content: {
      flex: 1,
  
      maxWidth: "72%",
  
      justifyContent: "center",
    },
  
    title: {
      fontSize: 18,
  
      color: "#FFFFFF",
  
      fontFamily:
        theme.FONTS.bold,
  
      marginBottom: 6,
    },
  
    subtitle: {
      fontSize: 12,
  
      color: "#F9FAFB",
  
      lineHeight: 18,
  
      fontFamily:
        theme.FONTS.medium,
  
      marginBottom: 12,
    },
  
    badge: {
      alignSelf: "flex-start",
  
      backgroundColor: "#FFFFFF",
  
      borderRadius: 10,
  
      paddingHorizontal: 10,
  
      paddingVertical: 0,
    },
  
    badgeText: {
      fontSize: 11,
  
      color: theme.COLORS.primary,
  
      fontFamily:
        theme.FONTS.bold,
    },
  
    imageWrapper: {
      width: 70,
  
      height: 70,
  
      borderRadius: 18,
  
      backgroundColor:
        "rgba(255,255,255,0.12)",
  
      justifyContent: "center",
  
      alignItems: "center",
  
      marginLeft: 10,
    },
  
    image: {
      width: 48,
  
      height: 60,
    },
  });