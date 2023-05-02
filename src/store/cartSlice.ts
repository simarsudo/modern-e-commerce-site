import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type cartType ={
    cartItems: string[],
}

const initialState: cartType = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartDispatch: (state, action: PayloadAction<{item:string}>) => {
            state.cartItems.push(action.payload.item)
        },
         removeFromCartDispatch: (state, action: PayloadAction<{item:string}>) => {
            const index = state.cartItems.indexOf(action.payload.item)
            state.cartItems.splice(index, 1)
        },
    }
})

export const {addToCartDispatch }= cartSlice.actions
export const SelectUser = (state: RootState) => state.cart
export default cartSlice.reducer