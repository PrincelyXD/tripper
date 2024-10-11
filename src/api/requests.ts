import axios from "./axiosInstance";


const get = (url: string) =>
  axios.get(url).then((response) => response?.data);

const post = (url: string, body: {}) =>
  axios.post(url, body).then((response) => response?.data?.data);


const apiEngine = {
  get,
  post,
  
};

export default apiEngine;
