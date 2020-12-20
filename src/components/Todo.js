import React, { useState } from "react";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "../firebase";
import EditIcon from "@material-ui/icons/Edit";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SettingsInputAntenna } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({ title }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    db.collection("todo").doc(title.id).set(
      {
        title: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Please edit</h1>
          <input
            type="text"
            value={input}
            placeholder={title.title}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateTodo}>Update Todo</button>
        </div>
      </Modal>
      <div className="todo">
        <div className="title">{title.title}</div>
        <EditIcon onClick={(e) => setOpen(true)} />
        <DeleteIcon
          className="button__delete"
          onClick={(e) => db.collection("todo").doc(title.id).delete()}
        />
      </div>
    </>
  );
}

export default Todo;
