import React, { useState } from 'react';

const Edit = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', isEditing: false },
    { id: 2, text: 'Build a todo app', isEditing: false },
    { id: 3, text: 'Deploy to production', isEditing: false },
  ]);

  const handleEdit = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isEditing: true };
      } else {
        return { ...todo, isEditing: false };
      }
    }));
  };

  const handleSave = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText, isEditing: false };
      } else {
        return todo;
      }
    }));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <input 
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => handleSave(todo.id, e.target.value)}
              />
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Edit;