import { combineReducers, createStore } from "redux";
import {todoReducers} from "./reducers/todoReducers";

const rootReducer = combineReducers({ todoReducers });
// @ts-ignore
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
