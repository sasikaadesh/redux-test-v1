import React, { useState } from "react";
import { ADDTODO, REMOVETODO, RESETTODO } from "../features/todo/toDoSlice";
import { useSelector, useDispatch } from "react-redux";

const ToDoComponent = () => {
  const [todoItem, setToDoItem] = useState("");
  const toDoList = useSelector((state) => state.toDo.todolist);
  const dispatch = useDispatch();

  const resetToDos = () => {
    setToDoItem("");
    dispatch(RESETTODO());
  };

  return (
    <>
      <hr />
      <p>
        {toDoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </p>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setToDoItem(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(ADDTODO(todoItem))}>Add Todo</button>
        <button onClick={() => dispatch(REMOVETODO())}>Remove Todo</button>
        <button onClick={resetToDos}>Reset Todos</button>
      </div>
    </>
  );
};

export default ToDoComponent;
