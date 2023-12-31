// set to localstorage
export const setRefreshToken = (refreshToken) => localStorage.setItem('refreshToken', refreshToken);
export const setAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);
export const setId = (id) => localStorage.setItem("id", id)

// Get tokens from local storage
export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const getAccessToken = () => localStorage.getItem('accessToken')
export const getId = () => localStorage.getItem('id')

// Clear tokens from local storage (on logout or token expiration)
export const clearRefreshToken = () => localStorage.removeItem('refreshToken');
export const clearAccessToken = () => localStorage.removeItem('accessToken');
export const clearId = () => localStorage.removeItem('id')