import React from "react";
import "./App.css";

function AddTodo(props) {
  return (
    <div className='list-input'>
        <input type="text" onChange={props.handleUserInput} value={props.userInput} ></input>
        <button onClick={props.handleAddTodo}>Submit</button>
    </div>
  );
}

export default AddTodo;
