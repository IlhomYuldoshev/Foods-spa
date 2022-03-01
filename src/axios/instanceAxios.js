const axios = require("axios");

const request = axios.create({
  baseURL: "https://foods-app-fa153-default-rtdb.firebaseio.com",
  headers: {"Content-Type": 'application/json'}
});

export default request
