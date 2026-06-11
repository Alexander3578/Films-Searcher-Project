import {configureStore} from '@reduxjs/toolkit';
import {appReducer, appSlice} from './app-slice';
import {movieReducer, movieSlice} from '../features/main/movie/model/movie-slice';

export const store = configureStore({
    reducer: {
        [appSlice.name]: appReducer,
        [movieSlice.name]: movieReducer
    },
    devTools: !import.meta.env.PROD,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store