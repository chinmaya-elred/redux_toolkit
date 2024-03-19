import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/counterReducer/counterSlice'; 
import userReducer from './redux/userReducer/userSlice'; 
import toDoReducer from './redux/toDoReducer/toDoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    todos: toDoReducer,
  },
});
