import axios from "axios";

const baseURL = "https://transmeet.herokuapp.com";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
