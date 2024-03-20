import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

const initialState: Theme = "light" as Theme;

const themeSlice = createSlice({
    name: "@@theme",
    initialState,
    reducers: {
        setTheme: (_, action: PayloadAction<Theme>) => action.payload,
    },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
