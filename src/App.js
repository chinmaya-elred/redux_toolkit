import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterReducer/counterSlice';
import { addUser, removeUser } from './redux/userReducer/userSlice';
import { addTodo, removeTodo, toggleTodo } from './redux/toDoReducer/toDoSlice';

function App() {
  // Counter Component
  const count = useSelector((state) => state.counter.value);
  const counterDispatch = useDispatch();

  // UserTable Component
  const users = useSelector((state) => state.users.users);
  const userDispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New User',
      email: 'newuser@example.com',
    };
    userDispatch(addUser(newUser));
  };

  const handleRemoveUser = (id) => {
    userDispatch(removeUser(id));
  };

  // TodoList Component
  const todos = useSelector((state) => state.todos.todos);
  const todoDispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      todoDispatch(addTodo({
        id: Math.random().toString(36).substr(2, 9),
        text: inputValue.trim(),
        completed: false,
      }));
      setInputValue('');
    }
  };

  const handleRemoveTodo = (id) => {
    todoDispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    todoDispatch(toggleTodo(id));
  };

  return (
    <div>

    <h1>Counter Example in redux toolkit</h1>
      <div>
        <div>Count: {count}</div>
        <button onClick={() => counterDispatch(increment())}>Increment</button>
        <button onClick={() => counterDispatch(decrement())}>Decrement</button>
      </div>



      <h1>User Table Example in redux toolkit</h1>
      <div>
        <button onClick={handleAddUser}>Add User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button onClick={() => handleRemoveUser(user.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <h1>Todo Example in redux toolkit</h1>
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
              <button onClick={() => handleToggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
