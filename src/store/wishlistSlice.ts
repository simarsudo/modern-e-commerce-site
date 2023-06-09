import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type wishlistType = {
    wishlistItems: string[];
};

const initialState: wishlistType = {
    wishlistItems: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<string>) => {
            console.log(action.payload, "dispatch actions");
            state.wishlistItems.push(action.payload);
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            const index = state.wishlistItems.indexOf(action.payload);
            state.wishlistItems.splice(index, 1);
        },
        createNewWishlist: (state, action: PayloadAction<string[]>) => {
            console.log(action.payload);
            state.wishlistItems = action.payload;
        },
        emptyUserWishlist: (state) => {
            state.wishlistItems = [];
        },
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    createNewWishlist,
    emptyUserWishlist,
} = wishlistSlice.actions;
export const SelectUser = (state: RootState) => state.wishlist;
export default wishlistSlice.reducer;
