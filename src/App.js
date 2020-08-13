import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";

const todos = [
  { id: 1, completed: "false", title: "Buy bread" },
  { id: 2, completed: "false", title: "Buy chease" },
  { id: 3, completed: "false", title: "Buy milk" },
  { id: 4, completed: "false", title: "Buy toasts" },
];

function App() {
  return (
    <div className="wrapper">
      <h1>React Totorial</h1>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
