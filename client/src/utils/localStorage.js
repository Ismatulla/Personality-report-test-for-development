// set to localstorage

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken);
}
export const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken);
};
export const setProfPic = (profPic) => {
  localStorage.setItem('profPic', profPic)
}
export const setEmail = (email) => {
  localStorage.setItem("email", email)
}
// Get tokens from local storage
export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const getAccessToken = () => localStorage.getItem('accessToken')

export const getProfPic = () => localStorage.getItem('profPic')
export const getEmail = () => localStorage.getItem('email')

// Clear tokens from local storage (on logout or token expiration)
export const clearRefreshToken = () => localStorage.removeItem('refreshToken');
export const clearAccessToken = () => localStorage.removeItem('accessToken');

export const clearProfPic = () => localStorage.removeItem('profpic')
export const clearEmail = () => localStorage.removeItem('email')