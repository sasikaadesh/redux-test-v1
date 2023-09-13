import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    ADDTODO: (state, action) => {
      state.todolist.push(action.payload);
    },
    REMOVETODO: (state) => {
      state.todolist.splice(-1, 1);
    },
    RESETTODO: (state) => {
      state.todolist = [];
    },
  },
});

export const { ADDTODO, REMOVETODO, RESETTODO } = toDoSlice.actions;

export default toDoSlice.reducer;
