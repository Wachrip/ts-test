import { combineReducers } from "redux";
import technics from "./technicsReducer";

const createRootReducer = () => combineReducers({ technics });

export default createRootReducer;
