import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import {
  useRef,
  useState,
} from "react";

import { theme } from "../theme";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width * 0.58;

const SPACING = 14;

const DATA = [
  {
    id: "1",

    title: "Sri Doddabasava Temple",

    image:
      "https://images.unsplash.com/photo-1583396618422-597e5322e7b9",
  },

  {
    id: "2",

    title: "K. R. Market",

    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
  },

  {
    id: "3",

    title: "Lalbagh Botanical Garden",

    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },

  {
    id: "4",

    title: "Cubbon Park",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
];

export default function PlacesSlider() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const flatListRef =
    useRef<FlatList>(null);

  const onScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const slideSize =
      CARD_WIDTH + SPACING;

    const index = Math.round(
      event.nativeEvent.contentOffset.x /
      slideSize
    );

    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* HEADING */}

      <Text style={styles.heading}>
        Go Places with GaadiGuru
      </Text>

      {/* SLIDER */}

      <FlatList
        ref={flatListRef}
        horizontal
        data={DATA}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={
          false
        }
        snapToInterval={
          CARD_WIDTH + SPACING
        }
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={
          styles.listContainer
        }
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* IMAGE */}

            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />

            {/* TITLE */}

            <Text
              numberOfLines={2}
              style={styles.title}
            >
              {item.title}
            </Text>
          </View>
        )}
      />

      {/* INDICATORS */}

      <View
        style={styles.indicatorContainer}
      >
        {DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,

              activeIndex === index &&
              styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  heading: {
    fontSize:
      theme.FONT_SIZES.lg,

    color: theme.COLORS.text,

    fontFamily:
      theme.FONTS.bold,

    marginBottom: 18,

    textAlign: "center",
  },

  listContainer: {
    paddingLeft: 16,

    paddingRight: 2,
  },

  card: {
    width: CARD_WIDTH,

    marginRight: SPACING,
  },

  image: {
    width: "100%",

    height: 120,

    borderRadius: 22,

    backgroundColor:
      theme.COLORS.card,
  },

  title: {
    marginTop: 10,

    fontSize:
      theme.FONT_SIZES.md,

    lineHeight: 22,

    color: theme.COLORS.text,

    fontFamily:
      theme.FONTS.bold,
  },

  indicatorContainer: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    marginTop: 20,
  },

  indicator: {
    width: 10,

    height: 10,

    borderRadius: 20,

    backgroundColor:
      theme.COLORS.border,

    marginHorizontal: 4,
  },

  activeIndicator: {
    width: 28,

    backgroundColor:
      theme.COLORS.text,
  },
});