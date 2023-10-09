// type
// payload

import { type } from "os";
import { ADD_TODO, DEL_TODO, UPDATE_TODO } from "./actionsTypes";
import { ITodo } from "../../interfaces";

// add todo
export const addTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo,
});
// del todo
export const delTodo = (id: number) => ({
  type: DEL_TODO,
  payload: id,
});
// update todo
export const updateTodo = (todo: ITodo, id: number) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, todoId: id },
});
