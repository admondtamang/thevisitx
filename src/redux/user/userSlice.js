import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        data: null,
        status: null,
    },

    reducers: {
        login: (state, action) => {
            console.log("state", action.payload);
            return {
                ...state,
                data: action.payload,
            };
        },
        logout: (state) => {
            return {
                ...state,
                data: null,
            };
        },
    },
});

export const { login, logout } = user.actions;
export default user.reducer;
