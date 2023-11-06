import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleProfData: {},
  allProfData: [],
};

const profileDataSlice = createSlice({
  name: "allProfData",
  initialState,
  reducers: {
    getSingleProfData: (state, action) => {
      state.singleProfData = action.payload;
    },
    getAllProfData: (state, action) => {
      state.allProfData = action.payload;
    },
  },
});

export default profileDataSlice.reducer;
export const { getSingleProfData, getAllProfData } = profileDataSlice.actions;
