import { AxiosRequestConfig } from 'axios'
import axiosInstance from './AxiosInstance'

export default class ApiService {
  static async get(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.get(url, config)
  }
  static async post(url: string, data: any, config?: AxiosRequestConfig) {
    return axiosInstance.post(url, data, config)
  }
  static async put(url: string, data: any, config?: AxiosRequestConfig) {
    return axiosInstance.put(url, data, config)
  }
  static async delete(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.delete(url, config)
  }
}
