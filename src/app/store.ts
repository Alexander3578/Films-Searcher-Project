import {configureStore} from '@reduxjs/toolkit';
import {appReducer, appSlice} from './app-slice';
import {movieReducer, movieSlice} from '../features/main/mainPage/model/movie-slice';
import {searchReducer, searchSlice} from '../features/main/searchPage/model/search-slice';
import {favoritesReducer, favoritesSlice} from '../features/main/favoritesPage/model/favorites-slice';

export const store = configureStore({
    reducer: {
        [appSlice.name]: appReducer,
        [movieSlice.name]: movieReducer,
        [searchSlice.name]: searchReducer,
        [favoritesSlice.name]: favoritesReducer
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

store.subscribe(() => {
    localStorage.setItem(
        'favorites',
        JSON.stringify(store.getState().favorites.favorites)
    )
})