import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { item } from "../typeModels/models";

type cartType = {
    cartItems: {
        [key: string]: number | string;
    };
};

const initialState: cartType = {
    cartItems: {},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<[string, string | number]>
        ) => {
            console.log(action);
            state.cartItems[action.payload[0]] = action.payload[1];
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            delete state.cartItems[action.payload];
        },
        createNewCart: (
            state,
            action: PayloadAction<{ [key: string]: number | string }>
        ) => {
            state.cartItems = action.payload;
        },
        emptyUserCart: (state) => {
            state.cartItems = {};
        },
    },
});

export const { addToCart, removeFromCart, createNewCart, emptyUserCart } =
    cartSlice.actions;
export const SelectUser = (state: RootState) => state.cart;
export default cartSlice.reducer;
