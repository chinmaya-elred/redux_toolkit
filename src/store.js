import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/counterReducer/counterSlice'; 
import userReducer from './redux/userReducer/userSlice'; 
import toDoReducer from './redux/toDoReducer/toDoSlice';
import productReducer from './redux/ProductReducer/productSlice'
import cartReducer from './redux/cartReducer/cartSlice'
import userLoginReducer from './redux/userLoginReducer/userLoginSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    todos: toDoReducer,
    products: productReducer,
    cart: cartReducer,
    user: userLoginReducer
  },
});
