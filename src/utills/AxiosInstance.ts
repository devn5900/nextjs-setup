import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosInstance.interceptors.request.use(
  config => {
    // set headers
    //   config.headers["Authorization"] = `Bearer ${token}`;
    return config
  },
  error => Promise.reject(error)
)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)
export default axiosInstance
