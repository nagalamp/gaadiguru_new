import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 22,
    },

    headerRow: {
        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

        paddingHorizontal: 16,

        marginBottom: 18,
    },

    heading: {
        fontSize: theme.FONT_SIZES.xxl,

        color: theme.COLORS.text,

        fontFamily: theme.FONTS.bold,
    },

    brand: {
        color: theme.COLORS.secondary,
    },

    seeAll: {
        fontSize: theme.FONT_SIZES.sm,

        color: theme.COLORS.secondary,

        fontFamily: theme.FONTS.bold,
    },

    scrollContainer: {
        paddingLeft: 16,

        paddingRight: 8,
    },

    card: {
        width: 240,

        height: 165,

        marginRight: 16,

        borderRadius: 28,

        overflow: "hidden",

        backgroundColor: theme.COLORS.card,

        ...theme.SHADOWS.card,
    },

    image: {
        width: "100%",

        height: "100%",
    },

    overlay: {
        position: "absolute",

        bottom: 0,

        left: 0,

        right: 0,

        paddingHorizontal: 18,

        paddingVertical: 16,

        justifyContent: "flex-end",

        height: "50%",
    },

    title: {
        fontSize: theme.FONT_SIZES.lg,

        color: "#FFFFFF",

        lineHeight: 24,

        fontFamily: theme.FONTS.bold,
    },

    indicatorContainer: {
        flexDirection: "row",

        justifyContent: "center",

        alignItems: "center",

        marginTop: 20,
    },

    activeIndicator: {
        width: 42,

        height: 8,

        borderRadius: 20,

        backgroundColor: theme.COLORS.secondary,

        marginHorizontal: 4,
    },

    indicator: {
        width: 12,

        height: 8,

        borderRadius: 20,

        backgroundColor: theme.COLORS.border,

        marginHorizontal: 4,
    },
});
