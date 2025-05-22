import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/cart/cartSlice';
import ordersAPI from './Features/Orders/OrdersApi';
import booksApi from './features/books/booksApi';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersAPI.reducerPath]: ordersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersAPI.middleware),
})