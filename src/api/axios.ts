import axios from 'axios';

const token = localStorage.getItem('accessToken');
const baseUrl = process.env.REACT_APP_API;

export const baseInstance = axios.create({
  baseURL: baseUrl,
});

export const authInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token,
  },
});
