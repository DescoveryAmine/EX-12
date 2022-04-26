import axios from "axios";


const API_URL = "http://localhost:5000/api/home/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

}

export default new UserService();
