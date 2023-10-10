import axios from 'axios';
const instance = axios.create({ baseURL: 'http://127.0.0.1:8000/users/' })

// intercept requests and add authorization header with access token 

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken)
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
    console.log(config.headers)
  }
  return config
},
  (error) => {
    return Promise.reject(error)
  }
)
export default instance
