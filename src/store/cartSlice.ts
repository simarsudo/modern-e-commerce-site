import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type cartType = {
    cartItems: string[];
};

const initialState: cartType = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ item: string }>) => {
            state.cartItems.push(action.payload.item);
        },
        removeFromCart: (state, action: PayloadAction<{ item: string }>) => {
            const index = state.cartItems.indexOf(action.payload.item);
            state.cartItems.splice(index, 1);
        },
        createNewCart: (state, action: PayloadAction<string[]>) => {
            state.cartItems = action.payload;
        },
        emptyUserCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeFromCart, createNewCart, emptyUserCart } =
    cartSlice.actions;
export const SelectUser = (state: RootState) => state.cart;
export default cartSlice.reducer;
