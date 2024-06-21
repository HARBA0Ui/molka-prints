import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://molka-prints.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;
