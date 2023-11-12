
import React, { useState } from 'react';
import './TodoApp.css'; 

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
   < div className='react'>
    <div className="todo-container">
        <h1 >ToDo App</h1>
      <div className="todo-header">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => 
            setNewTodo(e.target.value)
        }
        />
        <button className='add' onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div className="todo-buttons">
              <button className="edit" onClick={() => editTodo(todo.id, prompt('Edit todo:', todo.text))}>
                Edit
              </button>
              <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TodoApp;
