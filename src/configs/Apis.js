import axios from "axios";

const SERVER = "http://localhost:5000";

export const endpoints = {
  index: "/",
  predict: "/predict",
};

export default axios.create({
  baseURL: SERVER,
});
