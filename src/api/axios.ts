import axios from 'axios';

console.log(process.env.API_URL);
const API = axios.create({
  baseURL: process.env.API_URL,
});

export default API;

