import axios from 'axios';
const instance = axios.create({ baseURL: 'https://thiernobalde95.pythonanywhere.com' })

// intercept requests and add authorization header with access token 

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
  }
  return config
},
  (error) => {
    return Promise.reject(error)
  }
)
export default instance
