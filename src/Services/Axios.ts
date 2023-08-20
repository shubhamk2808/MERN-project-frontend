import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers?: {
    Authorization?: string
  }
}

const instance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
// Request interceptor
instance.interceptors.request.use(
  (config: any) => {
    const token: string = localStorage.getItem("token") || '';
    const yourAuthToken = JSON.parse(token);
    const headers = config.headers || {}
    headers['Authorization'] = `Bearer ${yourAuthToken}`;
    return { ...config, headers }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    console.log('An error occurred: ' + error.message)
    return Promise.reject(error)
  }
)

export default instance
