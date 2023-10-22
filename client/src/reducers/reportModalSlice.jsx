import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSuccesOpen: false,
  isWaitingOpen: false,
  isClicked: false,
};

const reportModalSlice = createSlice({
  name: "reportModal",
  initialState,
  reducers: {
    successOpenAction: (state, action) => {
      state.isSuccesOpen = action.payload;
    },
    waitingOpenAction: (state, action) => {
      state.isWaitingOpen = action.payload;
    },
    clickReadyButton: (state, action) => {
      state.isClicked = action.payload;
    },
  },
});

export default reportModalSlice.reducer;
export const { successOpenAction, waitingOpenAction, clickReadyButton } =
  reportModalSlice.actions;
