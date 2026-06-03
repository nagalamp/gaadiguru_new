import API from "./interceptor";

// =========================
// SEND OTP API
// =========================

export const sendOTPAPI = async (
  mobile: string
) => {
  try {
    const response = await API.post(
      "/auth/send-otp",
      {
        mobile,
        deviceType: "mobile",
        userType: "driver",
      }
    );

    return response.data;
  } catch (error: any) {
    console.log(
      "SEND OTP API ERROR:",
      error?.response?.data
    );

    throw error;
  }
};

// =========================
// VERIFY OTP API
// =========================

export const verifyOTPAPI = async (
  mobile: string,
  otp: string
) => {
  try {
    const response = await API.post(
      "/auth/verify-otp",
      {
        mobile,
        otp,
        deviceType: "mobile",
        userType: "driver",
      }
    );

    return response.data;
  } catch (error: any) {
    console.log(
      "VERIFY OTP API ERROR:",
      error?.response?.data
    );

    throw error;
  }
};