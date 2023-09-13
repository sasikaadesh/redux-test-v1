import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";
import counterReducer from "../features/counter/counterSlice";
import toDoReducer from "../features/todo/toDoSlice";

// const rootReducer = combineReducers({
//   counterReducer,
//   toDoReducer,
// });

// export const store = createStore(rootReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDo: toDoReducer,
  },
});
