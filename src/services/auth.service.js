import axios from "axios";

const API_URL = "http://localhost:5000/api/home/";

class AuthService {
  login(userid, password) {
    return axios
      .post(API_URL + "login", { userid, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
/*
  validate(userid, password) {
    return axios
      .post(API_URL + "validate", { userid, password })
      .then((response) => {
        return response.data;
      });
  }
*/
  register(userid,name,lastname,email,password) {
    return axios.post(API_URL + "register", {
      userid,
      name,
      lastname,
      email,
      password

    });
  }
}

export default new AuthService();
