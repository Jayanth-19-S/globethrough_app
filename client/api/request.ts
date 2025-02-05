import axios from "axios";
const customUrl = axios.create({
  baseURL: process.env.BASE_URL,
});
export default customUrl;
