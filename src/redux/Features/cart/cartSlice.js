import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id)
      if (!existingItem) {
        state.cartItems.push(action.payload)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Book added successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else {
        Swal.fire({
          title: "Already Added to the cart",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay!"
        })
      }
    },
    removeFromTheCart : (state, action) =>{
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
    },
    clearCart : (state) => {
      state.cartItems = []
    }
  }
})

// todo: export the actions
export const { addToCart, removeFromTheCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
