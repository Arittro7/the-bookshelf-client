import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/cart/cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})