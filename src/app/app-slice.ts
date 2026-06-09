import {createSlice} from '@reduxjs/toolkit';


export type ThemeMode = "dark" | "light"

export const appSlice = createSlice({
    name: "app",
    initialState: {
        themeMode: 'light' as ThemeMode
    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{theme: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.theme
        })
    }),
    selectors: {
        selectThemeMode: (state) => state.themeMode
    }
})

export const {changeThemeModeAC} = appSlice.actions
export const appReducer = appSlice.reducer

export const {selectThemeMode} = appSlice.selectors