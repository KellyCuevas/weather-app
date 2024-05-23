import axios from "axios";

const API_URL = "https://api.weather.gov";

export default axios.create({
  baseURL: API_URL,
});
