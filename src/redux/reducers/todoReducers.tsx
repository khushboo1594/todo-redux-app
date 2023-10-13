// a reducer takes 2 things
// 1. state

import { stat } from "fs";
import { ADD_TODO, DEL_TODO, UPDATE_TODO } from "../actions/actionsTypes";
import { ITodo } from "../../interfaces";

// 2. action
const initialState: [] = [];
export const todoReducers = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      const newState = state.filter((obj: any) => obj?.id !== action.payload);
      return newState;
    case UPDATE_TODO:
      const updatedState = state.map((obj: any) => {
        if (obj?.id === action.payload.todoId) {
          obj.title = action.payload.todo.title;
          obj.desc = action.payload.todo.desc;
        } else return obj;
      });

      return updatedState;

    default:
      return state;
  }
};
