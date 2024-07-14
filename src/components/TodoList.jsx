import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo, checkbox }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          checkbox={checkbox}
        />
      ))}
    </ul>
  );
}

export default TodoList;
