import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
//loading todos from lcal stroage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
//save from local storage for changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //new todo additon 
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
// update option
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };
//delete option
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
// completed & not completed option
  const checkbox = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        checkbox={checkbox}
      />
    </div>
  );
}

export default App;