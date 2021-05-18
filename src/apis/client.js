import axios from 'axios';

const url = 'https://api.github.com';

const client = axios.create({
  timeout: 50000,
  baseURL: url,
});

export const extractData = (data) => data.data;
client.interceptors.response.use(
  (response) => extractData(response),
  (error) => Promise.reject(error),
);
export default client;
