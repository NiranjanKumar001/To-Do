import React from "react";
import { useState } from "react";
import TodoComp from "./components/TodoComp";
import TodoComp2 from "./components/TodoComp2";
import UseEffect from "./components/UseEffect"
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  function pushData() {
    let todoObj = {
      id: Math.random() + Date.now() + todo,
      todo: todo,
      isCompleted: false,
    };
    setTodoArr([...todoArr, todoObj]);
    console.log(todoArr);
  }

  function handleDel(id) {
    console.log(id);
    let newTodoArr = todoArr.filter((el) => el.id !== id);
    setTodoArr(newTodoArr);
  }

  function update(id) {
    let updatedArr = todoArr.map((el) => {
      return el.id === id ? { ...el, isCompleted: !el.isCompleted } : el;
    });
    console.log(updatedArr);
    setTodoArr(updatedArr);
  }


  return (
    <div>
      {/* <input placeholder = "enter"
        onKeyDown={(e) => {
          if (e.key === "c") handlerFuntion();
        }}
      /> */}
      <input
        type="text"
        name=""
        id=""
        placeholder="add Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={pushData}>click</button>
      {todoArr.map((el) => (
        <div>
          {/* <h1>{el.todo}</h1>
            <h1>{el.isCompleted ? "Completed" : "Not Completed"}</h1>
            <button onClick={()=>{handleDel(el.id)}}>Delete</button>
            <button onClick={()=>{update(el.id)}}>Update Task</button> */}
          <TodoComp
            id={el.id}
            todo={el.todo}
            status={el.isCompleted}
            updFun={update}
            delFun={handleDel}
          />
        </div>
      ))}
      {/* <UseEffect /> */}
    </div>
  );
}

export default App;

