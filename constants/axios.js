import axios from "axios";

const instance = axios.create({
  baseURL: "https://designback1.herokuapp.com/api",
});
export default instance;
