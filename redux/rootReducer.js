import { combineReducers } from "redux";
import user from "./usersSlice";
import room from "./roomsSlice";

export default combineReducers({ user, room });
