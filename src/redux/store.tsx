import { combineReducers, createStore } from "redux";
import todoReducers from "./reducers/todoReducers";

const rootReducer = combineReducers({ todoReducers });
// @ts-ignore
const store = createStore(rootReducer);
export default store;
