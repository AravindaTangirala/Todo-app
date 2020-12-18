import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };
  return (
    <div className="app">
      <h1>Todo List</h1>

      <input
        type="text"
        value={input}
        placeholder="todo list item"
        onChange={(e) => setInput(e.target.value)}
      />
      <AddCircleOutlineIcon disabled={!input} onClick={handleSubmit} />
      {todo.map((list) => (
        <Todo title={list} />
      ))}
    </div>
  );
}

export default App;
