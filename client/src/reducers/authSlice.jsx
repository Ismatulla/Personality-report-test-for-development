import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: null,
  linkedinUrl: "",
  chartype: "",
  login: "",
};

const authSlice = createSlice({
  name: "registerAuth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.signUp = action.payload;
    },
    linkedinUrl: (state, action) => {
      state.linkedinUrl = action.payload;
    },
    chartype: (state, action) => {
      state.chartype = action.payload;
    },
    login: (state, action) => {
      state.login = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { signup, linkedinUrl, chartype,login } = authSlice.actions;
