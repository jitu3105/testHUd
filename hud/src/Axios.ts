import axios from "axios";1

export default axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: true,
});
