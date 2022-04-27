import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  VALIDATION_SUCCESS,
  VALIDATION_FAIL,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import HomeService from "../services/home.service";
import AuthService from "../services/auth.service";

export const register = (userid,username, lastname, email, password) => (dispatch) => {
  return HomeService.register(userid, username, lastname, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (userid, password) => (dispatch) => {
  return HomeService.login(userid, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const validate = (userid) => (dispatch) => {
  return AuthService.validate(userid).then(
    (data) => {
      dispatch({
        type: VALIDATION_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: VALIDATION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getauth = (userid) => (dispatch) => {
  return AuthService.getauth(userid).then(
    (data) => {
      dispatch({
        type: AUTHORIZATION_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: AUTHORIZATION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  HomeService.logout();

  dispatch({
    type: LOGOUT,
  });
};


