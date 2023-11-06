import { createSlice } from "@reduxjs/toolkit";
import { getId, getAccessToken, getRefreshToken } from "../utils/localStorage";
const initialState = {
  tokenSuccess: getAccessToken() ? getAccessToken() : null,
  tokenRefresh: getRefreshToken() ? getRefreshToken() : null,
  id: getId() ? getId() : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getTokenSuccess: (state, action) => {
      state.tokenSuccess = action.payload;
    },
    getTokenRefresh: (state, action) => {
      state.tokenRefresh = action.payload;
    },
    getIdSuccess: (state, action) => {
      state.id = action.payload;
    },
    clearTokenSuccess: (state) => {
      state.tokenSuccess = null;
    },
  },
});

export default authSlice.reducer;
export const {
  getIdSuccess,
  getTokenSuccess,
  getTokenRefresh,
  clearTokenSuccess,
} = authSlice.actions;
