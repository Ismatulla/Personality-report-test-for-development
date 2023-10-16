import axios from 'axios';
const googleFetch = axios.create({ baseURL: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' })

// intercept requests and add authorization header with access token 

googleFetch.interceptors.request.use((config) => {
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
export default googleFetch
