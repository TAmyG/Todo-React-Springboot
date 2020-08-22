import axios from 'axios';
import { API_URL } from '../../Constants';

class HelloWorldService {
  executeHelloWorldServie() {
    return axios.get(`${API_URL}/hello-world`);
  }
  executeHelloWorldBeanServie() {
    return axios.get(`${API_URL}/hello-world-bean`);
  }
  executeHelloWorldPathVariableServie(name) {
    return axios.get(`${API_URL}/hello-world/path-variable/${name}`);
  }
}

export default new HelloWorldService();
