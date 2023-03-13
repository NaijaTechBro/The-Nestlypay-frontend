import axios from "axios";

const theToken = localStorage.getItem('token');

export default axios.create({
  baseURL: "https://nestlipay-data.onrender.com/api/v1",
  headers: {'Authorization': `Bearer ${theToken}`}
});

axios.defaults.headers.common["Authorization"] = `Bearer ${theToken}`