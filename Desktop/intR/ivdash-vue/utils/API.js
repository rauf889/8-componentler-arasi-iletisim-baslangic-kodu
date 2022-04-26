import Axios from "axios";

export default Axios.create({
  baseURL: "API_URL",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
  responseType: "json"
});
