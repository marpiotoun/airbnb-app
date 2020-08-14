import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import callApi, { getFavsRequest, toggleFavRequest } from "../api";
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
    setPage: (state, action) => {
      state.explore.page = action.payload;
    },
    setExploreRooms: (state, action) => {
      if (action.payload.page === 1) {
        state.explore.rooms = action.payload.data;
      } else {
        const rooms = state.explore.rooms.concat(action.payload.data);
        state.explore.rooms = rooms;
      }
    },
    setFavs: (state, action) => {
      state.favs = action.payload;
    },
    toggleFav: (state, action) => {
      const { roomId, is_fav } = action.payload;
      const room = state.explore.rooms.find(room => room.id === roomId);
      const rooms = state.explore.rooms.map(room => {
        if (room.id === roomId) {
          room.is_fav = is_fav;
        }
        return room;
      });
      state.explore.rooms = rooms;
    },
  },
});

export const {
  setPage,
  setExploreRooms,
  setFavs,
  toggleFav,
} = roomSlice.actions;

// API
export const getRooms = (page, token) => dispatch => {
  callApi("get", `rooms/?page=${page}`, null, token)
    .then(res => {
      const { data } = res;
      dispatch(
        setExploreRooms({
          page,
          data: data.results,
        })
      );
    })
    .catch(e => console.log(e));
};

export const loadFavs = () => async (dispatch, getState) => {
  const { userId, token } = getState().user;
  getFavsRequest(userId, token).then(res => {
    const { data } = res;
    dispatch(setFavs(data));
  });
};

export const toggleFavApi = (roomId, is_fav) => async (dispatch, getState) => {
  const { userId, token } = getState().user;
  toggleFavRequest(userId, roomId, token)
    .then(res => {
      const { data } = res;
      dispatch(toggleFav({ roomId, is_fav: !is_fav }));
      dispatch(setFavs(data));
    })
    .catch(e => {
      console.log(e);
      dispatch(toggleFav({ id: roomId, is_fav: is_fav }));
    });
};

export default roomSlice.reducer;
