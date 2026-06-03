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
} from "../services/authService";

import { setToken } from "../utils/storage";

export default function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  // =========================
  // TOAST
  // =========================

  const showError = (message: string) => {
    Toast.show({
      type: "error",
      text1: message,
      position: "top",
      topOffset: 60,
    });
  };

  const showSuccess = (
    message: string
  ) => {
    Toast.show({
      type: "success",
      text1: message,
      position: "top",
      topOffset: 60,
    });
  };

  // =========================
  // VALIDATION
  // =========================

  const validateMobile = () => {
    if (!mobile.trim()) {
      showError(
        "Mobile number is required"
      );

      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showError(
        "Enter valid mobile number"
      );

      return false;
    }

    return true;
  };

  const validateOTP = () => {
    if (!otp.trim()) {
      showError("OTP is required");

      return false;
    }

    if (!/^\d{6}$/.test(otp)) {
      showError(
        "Enter valid 6 digit OTP"
      );

      return false;
    }

    return true;
  };

  // =========================
  // SEND OTP
  // =========================

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

      if (data.success) {
        setShowOTP(true);

        showSuccess(
          data.message ||
            "OTP sent successfully"
        );
      } else {
        showError(
          data.message ||
            "Failed to send OTP"
        );
      }
    } catch (error: any) {
      console.log(
        "SEND OTP ERROR:",
        error?.response?.data
      );

      showError(
        error?.response?.data?.message ||
          error?.message ||
          "Server Error"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // VERIFY OTP
  // =========================

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

      if (data.success) {
        // SAVE TOKEN

        if (data.token) {
          await setToken(data.token);
        }

        // SAVE USER DETAILS

        await AsyncStorage.setItem(
          "user",
          JSON.stringify({
            mobile,
            userType: "driver",
            deviceType: "mobile",

            id:
              data?.user?._id || "",

            name:
              data?.user?.name || "",

            email:
              data?.user?.email || "",
          })
        );

        showSuccess(
          data.message ||
            "Login Successful"
        );

        // NAVIGATE TO TABS

        setTimeout(() => {
          router.replace(
            "/(tabs)"
          );
        }, 1000);
      } else {
        showError(
          data.message ||
            "Invalid OTP"
        );
      }
    } catch (error: any) {
      console.log(
        "VERIFY OTP ERROR:",
        error?.response?.data
      );

      showError(
        error?.response?.data?.message ||
          error?.message ||
          "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

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
        backgroundColor="#EBCF59"
      />

      {/* LOGO */}

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* TITLE */}

      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Text style={styles.subtitle}>
        Continue with your mobile
        number
      </Text>

      {/* INPUT */}

      <View style={styles.inputContainer}>
        {!showOTP ? (
          <TextInput
            value={mobile}
            onChangeText={(text) =>
              setMobile(
                text.replace(
                  /[^0-9]/g,
                  ""
                )
              )
            }
            placeholder="Enter mobile number"
            placeholderTextColor="#7A6B2F"
            keyboardType="number-pad"
            maxLength={10}
            style={styles.input}
          />
        ) : (
          <TextInput
            value={otp}
            onChangeText={(text) =>
              setOtp(
                text.replace(
                  /[^0-9]/g,
                  ""
                )
              )
            }
            placeholder="Enter 6 digit OTP"
            placeholderTextColor="#7A6B2F"
            keyboardType="number-pad"
            maxLength={6}
            style={styles.otpInput}
          />
        )}
      </View>

      {/* BUTTON */}

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
          {loading
            ? "Please wait..."
            : showOTP
            ? "Verify OTP"
            : "Send OTP"}
        </Text>
      </TouchableOpacity>

      {/* CHANGE NUMBER */}

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
    backgroundColor: "#EBCF59",
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
    color: "#111111",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    fontFamily:
      "Comfortaa_500Medium",
    color: "#5C5130",
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 22,
  },

  inputContainer: {
    height: 60,
    backgroundColor: "#F4DE7A",
    borderWidth: 1,
    borderColor: "#C8AE46",
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
    color: "#111111",
  },

  otpInput: {
    flex: 1,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: 16,
    fontFamily:
      "Comfortaa_700Bold",
    color: "#111111",
  },

  button: {
    height: 60,
    backgroundColor: "#111111",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  disabledButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: "#EBCF59",
    fontSize: 16,
    fontFamily:
      "Comfortaa_700Bold",
  },

  changeNumber: {
    marginTop: 24,
    textAlign: "center",
    fontSize: 14,
    color: "#111111",
    fontFamily:
      "Comfortaa_600SemiBold",
  },
});