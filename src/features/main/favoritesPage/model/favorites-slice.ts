import {createAppSlice} from '@/common/utils/createAppSlice';
import {MovieResults} from '@/features/main/mainPage/api/movieApi.types';
import {RootState} from '@/app/store';

type MovieState = {
    favorites: MovieResults[]
}

const getInitialFavorites = (): MovieState => {
    try {
        const data = localStorage.getItem('favorites')
        return data ? JSON.parse(data) : { favorites: [] }
    } catch {
        return { favorites: [] }
    }
}

const initialFavorites: MovieState = getInitialFavorites()


export const favoritesSlice = createAppSlice({
    name: 'favorites',
    initialState: initialFavorites,
    reducers: (create) => ({
        toggleFavorite: create.reducer<{ movie: MovieResults }>((state, action) => {
            const index = state.favorites.findIndex(
                movie => movie.id === action.payload.movie.id
            )

            if (index === -1) {
                state.favorites.push(action.payload.movie)
            } else {
                state.favorites.splice(index, 1)
            }
        })
    }),
    selectors: {
        selectFavorites: (state) => state.favorites,
    }
})

export const {toggleFavorite} = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer

export const {selectFavorites} = favoritesSlice.selectors

export const selectIsFavorite =
    (movieId: number) => (state: RootState) =>
        state.favorites.favorites?.some(movie => movie.id === movieId);