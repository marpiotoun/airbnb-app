import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../api";
import callApi from "../api";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    token: null,
    userId: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.userId = payload.id;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

// API + Dispatch
export const { login, logout } = userSlice.actions;
export const loginRequest = form => async dispatch => {
  try {
    const { data, status } = await callApi("post", "users/login/", form);
    if (status === 200) {
      dispatch(login({ token: data.token, id: data.id }));
      return true;
    }
  } catch (e) {
    alert("Login failed");
  }
};

export default userSlice.reducer;
