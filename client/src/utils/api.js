import axios from 'axios';
const instance = axios.create({ baseURL: 'https://thiernobalde95.pythonanywhere.com/users/' })

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
