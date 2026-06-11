import {createAppSlice} from '../common/utils/createAppSlice';
import {RequestStatus} from '../common/types';


export type ThemeMode = "dark" | "light"

export const appSlice = createAppSlice({
    name: "app",
    initialState: {
        themeMode: 'light' as ThemeMode,
        status: "idle" as RequestStatus,
        error: null as string | null,
    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{theme: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.theme
        }),
        setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
            state.status = action.payload.status
        }),
        setErrorAC: create.reducer<{ error: string | null }>((state, action) => {
            state.error = action.payload.error
        }),
    }),
    selectors: {
        selectThemeMode: (state) => state.themeMode,
        selectStatus: (state) => state.status,
        selectError: (state) => state.error,
    }
})

export const {changeThemeModeAC, setErrorAC, setAppStatusAC, } = appSlice.actions
export const appReducer = appSlice.reducer

export const {selectThemeMode, selectStatus, selectError} = appSlice.selectors