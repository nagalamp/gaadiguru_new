import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

import {
  sendOTPAPI,
  verifyOTPAPI,
} from "../../services/authService";

import { setToken } from "../../utils/storage";

const COLORS = {
  primary: "#EBCF59",
  secondary: "#F4DE7A",
  border: "#C8AE46",
  black: "#111111",
  subtitle: "#5C5130",
  placeholder: "#7A6B2F",
};

export default function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const showToast = (
    type: "success" | "error",
    message: string
  ) => {
    Toast.show({
      type,
      text1: message,
      position: "top",
      topOffset: 60,
    });
  };

  const sanitizeNumber = (
    value: string
  ) => value.replace(/[^0-9]/g, "");

  const validateMobile = () => {
    if (!mobile.trim()) {
      showToast(
        "error",
        "Mobile number is required"
      );

      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showToast(
        "error",
        "Enter valid mobile number"
      );

      return false;
    }

    return true;
  };

  const validateOTP = () => {
    if (!otp.trim()) {
      showToast(
        "error",
        "OTP is required"
      );

      return false;
    }

    if (!/^\d{6}$/.test(otp)) {
      showToast(
        "error",
        "Enter valid 6 digit OTP"
      );

      return false;
    }

    return true;
  };

  const saveUserData = async (
    data: any
  ) => {
    if (data.token) {
      await setToken(data.token);
    }

    await AsyncStorage.setItem(
      "user",
      JSON.stringify({
        mobile,
        userType: "driver",
        deviceType: "mobile",
        id: data?.user?._id || "",
        name: data?.user?.name || "",
        email: data?.user?.email || "",
      })
    );
  };

  const sendOTP = async () => {
    if (!validateMobile()) return;

    try {
      setLoading(true);

      const data = await sendOTPAPI(
        mobile
      );

      console.log(
        "SEND OTP RESPONSE:",
        data
      );

      if (!data.success) {
        return showToast(
          "error",
          data.message ||
          "Failed to send OTP"
        );
      }

      setShowOTP(true);

      showToast(
        "success",
        data.message ||
        "OTP sent successfully"
      );
    } catch (error: any) {
      console.log(
        "SEND OTP ERROR:",
        error?.response?.data
      );

      showToast(
        "error",
        error?.response?.data
          ?.message ||
        error?.message ||
        "Server Error"
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!validateOTP()) return;

    try {
      setLoading(true);

      const data = await verifyOTPAPI(
        mobile,
        otp
      );

      console.log(
        "VERIFY OTP RESPONSE:",
        data
      );

      if (!data.success) {
        return showToast(
          "error",
          data.message || "Invalid OTP"
        );
      }

      await saveUserData(data);

      showToast(
        "success",
        data.message ||
        "Login Successful"
      );

      setTimeout(() => {
        router.replace("/(tabs)");
      }, 1000);
    } catch (error: any) {
      console.log(
        "VERIFY OTP ERROR:",
        error?.response?.data
      );

      showToast(
        "error",
        error?.response?.data
          ?.message ||
        error?.message ||
        "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const buttonTitle = loading
    ? "Please wait..."
    : showOTP
      ? "Verify OTP"
      : "Send OTP";

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          COLORS.primary
        }
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Text style={styles.subtitle}>
        Continue with your mobile
        number
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={showOTP ? otp : mobile}
          onChangeText={(text) =>
            showOTP
              ? setOtp(
                sanitizeNumber(text)
              )
              : setMobile(
                sanitizeNumber(text)
              )
          }
          placeholder={
            showOTP
              ? "Enter 6 digit OTP"
              : "Enter mobile number"
          }
          placeholderTextColor={
            COLORS.placeholder
          }
          keyboardType="number-pad"
          maxLength={
            showOTP ? 6 : 10
          }
          style={
            showOTP
              ? styles.otpInput
              : styles.input
          }
        />
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          loading &&
          styles.disabledButton,
        ]}
        onPress={
          showOTP
            ? verifyOTP
            : sendOTP
        }
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>

      {showOTP && (
        <TouchableOpacity
          onPress={() => {
            setShowOTP(false);
            setOtp("");
          }}
        >
          <Text
            style={styles.changeNumber}
          >
            Change Mobile Number
          </Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.primary,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logoImage: {
    width: 170,
    height: 170,
  },

  title: {
    fontSize: 30,
    fontFamily:
      "Comfortaa_700Bold",
    color: COLORS.black,
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    fontFamily:
      "Comfortaa_500Medium",
    color: COLORS.subtitle,
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 22,
  },

  inputContainer: {
    height: 60,
    backgroundColor:
      COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily:
      "Comfortaa_600SemiBold",
    color: COLORS.black,
  },

  otpInput: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontFamily:
      "Comfortaa_700Bold",
    color: COLORS.black,
  },

  button: {
    height: 60,
    backgroundColor:
      COLORS.black,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  disabledButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily:
      "Comfortaa_700Bold",
  },

  changeNumber: {
    marginTop: 24,
    textAlign: "center",
    fontSize: 14,
    color: COLORS.black,
    fontFamily:
      "Comfortaa_600SemiBold",
  },
});