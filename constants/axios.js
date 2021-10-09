import axios from "axios";

const instance = axios.create({
  baseURL: "https://food-res.herokuapp.com",
});
export default instance;
