import axios from 'axios';

const API = axios.create({
  baseURL: 'http://10.0.0.50:3000',
});

export default API;
