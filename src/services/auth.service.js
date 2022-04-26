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

  register(name, email, password) {
    return axios.post(API_URL + "register", {
      name,
      email,
      password,
    });
  }
}

export default new AuthService();
