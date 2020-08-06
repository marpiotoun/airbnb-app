import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import callApi from "../api";
import { useSelector } from "react-redux";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    setExploreRooms: (state, action) => {
      state.explore.rooms = action.payload;
      return state;
    },
  },
});

const { setExploreRooms } = roomSlice.actions;

// API
export const getRooms = (page, token) => async dispatch => {
  const { data, status } = await callApi(
    "get",
    `rooms/?page=${page}`,
    null,
    token
  );
  dispatch(setExploreRooms(data.results));
};
export default roomSlice.reducer;
