import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-chehan.herokuapp.com/",
});

export default instance;
