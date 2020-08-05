import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
