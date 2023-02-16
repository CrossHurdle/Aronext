import axios from "axios";

// const API_URL = "https://af04-210-18-139-25.in.ngrok.io/";
const API_URL = "http://localhost:8080/";

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;
