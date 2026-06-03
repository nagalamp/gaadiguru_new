import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.132:5005/api",

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});

export default API;