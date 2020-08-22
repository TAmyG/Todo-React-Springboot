import axios from 'axios';
import { API_URL } from '../../Constants';

export const USER_NAME_SESSION_ATT_NAME = 'authenticatedUser';

class Authentication {
  executeBasicAuthentication(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    return axios.get(`${API_URL}/basicauth`, {
      headers: { Authorization: basicAuthHeader },
    });
  }

  executeJwtAuthentication(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
  }

  createBasicAuthToken(username, password) {
    let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeader;
  }

  createJwtAuthToken(token) {
    let jwtAuthHeader = 'Bearer ' + token;
    return jwtAuthHeader;
  }

  registerSuccesfullLogin(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    sessionStorage.setItem(USER_NAME_SESSION_ATT_NAME, username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  registerSuccesfullLoginForJwt(username, token) {
    let basicAuthHeader = this.createJwtAuthToken(token);
    sessionStorage.setItem(USER_NAME_SESSION_ATT_NAME, username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATT_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATT_NAME);
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATT_NAME);
    if (user === null) {
      return '';
    }
    return user;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.Authorization = token;
      }
      return config;
    });
  }
}

export default new Authentication();
