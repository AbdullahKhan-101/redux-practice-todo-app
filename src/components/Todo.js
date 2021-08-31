import React, { useState } from "react";
import "./todo.css";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { addTodo, deleteTodo, removeTodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [inputData, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  return (
    <div>
      <h1>Add yout list here ✌</h1>
      <br />
      <div className="input">
        <TextField
          id="standard-basic"
          value={inputData}
          onChange={(e) => setInput(e.target.value)}
          placeholder=" ✍ Add Your task..."
          autoComplete="off"
        />
      </div>
      <AddIcon
        id="add"
        onClick={() => dispatch(addTodo(inputData), setInput(""))}
      />

      {list.map((elem) => {
        return (
          <div className="li" key={elem.id}>
            <li>{elem.data} </li>
            <DeleteForeverIcon
              id="delete"
              onClick={() => dispatch(deleteTodo(elem.id))}
            />
          </div>
        );
      })}

      <button onClick={() => dispatch(removeTodo())}>Clera all</button>
    </div>
  );
};

export default Todo;
