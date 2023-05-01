import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type userType ={
    displayName: string,
    email: string,
    isAuthenticated: boolean
}

const initialState: userType = {
    displayName: "",
    email: "",
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticateUser: (state, action: PayloadAction<{email: string, displayName: string}>) => {
            state.email = action.payload.email
            state.displayName= action.payload.displayName
            state.isAuthenticated = true
        },
        deAuthenticateUser: (state) => {
            state.email = "",
            state.displayName= "",
            state.isAuthenticated = false
        }
    }
})

export const {authenticateUser, deAuthenticateUser}= userSlice.actions
export const SelectUser = (state: RootState) => state.user
export default userSlice.reducer