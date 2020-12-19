import React from "react";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "../firebase";

const Todo = ({ title }) => {
  return (
    <div className="todo">
      <div className="title">{title.title}</div>
      <DeleteIcon
        className="button__delete"
        onClick={(e) => db.collection("todo").doc(title.id).delete()}
      />
    </div>
  );
};

export default Todo;
