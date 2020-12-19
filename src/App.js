import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    db.collection("todo").onSnapshot((snapshot) => {
      setTodo(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);
  const addTodo = (e) => {
    e.preventDefault();
    //setTodo([...todo, input]);
    db.collection("todo").add({
      title: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="app">
      <div className="notepad">
        <div className="lines"></div>
        <div className="header">
          <h1>My Todo List</h1>
          <form className="todo__input">
            <input
              className="input__box"
              type="text"
              value={input}
              placeholder="todo list item"
              onChange={(e) => setInput(e.target.value)}
            />

            <AddCircleOutlineIcon
              className="todo__button"
              disabled={!input}
              onClick={addTodo}
            />
          </form>
        </div>
        {todo.map((list) => (
          <Todo title={list} />
        ))}
      </div>
    </div>
  );
}

export default App;
