// save tokens to local storage

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken)
}

// Get acess token from local storage

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken')
}

// Clear tokens from local storage (on logout or token expiration)

export const clearRefreshToken = () => {
  localStorage.removeItem('refreshToken')
}