import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

class AuthService {


  validate(userid) {
    return axios
      .post(API_URL + "validate", {userid})
      .then((response) => {
        return response.data;
      });
  }

  getauth(userid) {
    return axios
      .post(API_URL + "getauth", {userid})
      .then((response) => {
        return response.data;
      });
  }

}

export default new AuthService();
