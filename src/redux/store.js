import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/cart/cartSlice';
import booksApi from './Features/Books/booksAPI';

export default configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})