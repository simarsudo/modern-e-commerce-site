import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { item } from "../typeModels/models";
import { product } from "../typeModels/models";

type cartType = {
    cartItems: {
        [key: string]: number | string;
    };
    priceOfItems: {
        [id: string]: number;
    };
    cartTotalPrice: number;
};

const initialState: cartType = {
    cartItems: {},
    cartTotalPrice: 0,
    priceOfItems: {},
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
        addToTotalPrice: (
            state,
            action: PayloadAction<[id: string, price: number]>
        ) => {
            state.priceOfItems[action.payload[0]] = action.payload[1];
            state.cartTotalPrice = 0;
            const tempItems = { ...state.priceOfItems };
            Object.keys(tempItems).map((item) => {
                state.cartTotalPrice += state.priceOfItems[item];
            });
        },
        reduceFromTotalPrice: (state, action: PayloadAction<string>) => {
            delete state.priceOfItems[action.payload];
            state.cartTotalPrice = 0;
            const tempItems = { ...state.priceOfItems };
            Object.keys(tempItems).map((item) => {
                state.cartTotalPrice += state.priceOfItems[item];
            });
        },
        placeOrderReset: (state) => {
            state.cartItems = {};
            state.cartTotalPrice = 0;
            state.priceOfItems = {};
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
    placeOrderReset,
} = cartSlice.actions;
export const SelectUser = (state: RootState) => state.cart;
export default cartSlice.reducer;
