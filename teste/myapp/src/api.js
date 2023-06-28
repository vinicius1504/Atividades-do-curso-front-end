import axios from "axios";

const api = axios.create({
  baseURL: "https://api.adviceslip.com/advice/1",
});

export default api;