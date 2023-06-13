import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { item } from "../typeModels/models";
import { product } from "../typeModels/models";

type cartType = {
    cartItems: {
        [key: string]: number | string;
    };
    cartItemsDetails: {
        [id: string]: product;
    };
    cartTotalPrice: number;
};

const initialState: cartType = {
    cartItems: {},
    cartTotalPrice: 0,
    cartItemsDetails: {},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<[string, string | number]>
        ) => {
            state.cartItems[action.payload[0]] = action.payload[1];
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            delete state.cartItems[action.payload];
            delete state.cartItemsDetails[action.payload];
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
        addToTotalPrice: (state, action: PayloadAction<number>) => {
            console.log(
                "total " + state.cartTotalPrice + " adding " + action.payload
            );
            state.cartTotalPrice += action.payload;
        },
        reduceFromTotalPrice: (state, action: PayloadAction<number>) => {
            state.cartTotalPrice -= action.payload;
        },
        resetTotalPrice: (state) => {
            state.cartTotalPrice = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    createNewCart,
    emptyUserCart,
    addToTotalPrice,
    reduceFromTotalPrice,
    resetTotalPrice,
} = cartSlice.actions;
export const SelectUser = (state: RootState) => state.cart;
export default cartSlice.reducer;
