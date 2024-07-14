import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo, checkbox }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, title: newTitle });
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        id='checkbox'
        checked={todo.completed}
        onChange={() => checkbox(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
