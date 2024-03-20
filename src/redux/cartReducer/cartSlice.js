// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of items in the cart
    total: 0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.total += newItem.price;
    },
    removeItemFromCart(state, action) {
      const removedItem = action.payload;
      state.items = state.items.filter(item => item.id !== removedItem.id);
      state.total -= removedItem.price;
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
