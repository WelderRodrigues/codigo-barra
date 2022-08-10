import axios from "axios";

const api = axios.create({
  baseURL: "https://codigo-barra-api.herokuapp.com",
  //baseURL: "http://192.168.2.107:3333",
});

export default api;
