export const COLORS = {
  // Brand Colors
  primary: "#111111",        // Black from logo border/text
  secondary: "#D92B2B",      // Red curve
  accent: "#FFC107",         // Highlight accent
  accentDark: "#E0A800",

  // Backgrounds
  background: "#FFDE59",     // Main yellow background
  backgroundSecondary: "#FFF4B8",
  backgroundDark: "#F5D94A",

  // Cards & Surfaces
  card: "#F4DE7A",
  surface: "#FFF8D6",
  surfaceDark: "#EBCF58",

  // Text
  text: "#111111",
  textSecondary: "#5C5130",
  textLight: "#8A7A42",
  textWhite: "#FFFFFF",

  // Borders & Divider
  border: "#C8AE46",
  divider: "#E5CC61",

  // Input Fields
  inputBackground: "#FFF8D6",
  inputBorder: "#D4B94E",
  inputPlaceholder: "#8A7A42",
  inputText: "#111111",

  // Buttons
  buttonPrimary: "#111111",
  buttonSecondary: "#D92B2B",
  buttonText: "#FFFFFF",
  buttonDisabled: "#B8A44E",

  // Icons
  icon: "#111111",
  iconSecondary: "#5C5130",
  iconLight: "#FFFFFF",

  // Status Colors
  success: "#2E9E5B",
  successLight: "#DDF5E7",

  error: "#D92B2B",
  errorLight: "#FFE1E1",

  warning: "#D4A017",
  warningLight: "#FFF3CD",

  info: "#1976D2",
  infoLight: "#DCEEFF",

  // Ride Status
  online: "#2E9E5B",
  offline: "#999999",
  busy: "#D92B2B",

  // Map
  routeLine: "#111111",
  pickup: "#2E9E5B",
  drop: "#D92B2B",

  // Shadows
  shadow: "rgba(0,0,0,0.15)",
  overlay: "rgba(0,0,0,0.4)",

  // Skeleton Loader
  skeleton: "#E8D67A",

  // Transparent
  transparent: "transparent",
};

export const FONTS = {
  regular: "System",
  medium: "System",
  semiBold: "System",
  bold: "System",
};

export const FONT_SIZES = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  title: 28,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const RADIUS = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  round: 999,
};

export const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};