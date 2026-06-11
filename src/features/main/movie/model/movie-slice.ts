import {createAppSlice} from '@/common/utils/createAppSlice';
import {GetPopularMovieParams, GetPopularMovieTypes} from '../api/movieApi.types';
import {movieApi} from '../api/movieApi';
import {setAppStatusAC} from '@/app/app-slice';

type MovieState = {
    popular: GetPopularMovieTypes | null
}
export const movieSlice = createAppSlice({
    name: 'movie',
    initialState: {
        popular: null
    } as MovieState,
    reducers: (create) => ({
        fetchPopularMovieTC: create.asyncThunk(
            async (params: GetPopularMovieParams, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }))

                    const res = await movieApi.getPopularMovieList(params)

                    thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }))

                    return { popular: res.data }
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'failed' }))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.popular = action.payload.popular
                },
            },
        )
    }),
    selectors: {
        popularMovieSelector: (state) => state.popular
    }
})

export const {fetchPopularMovieTC} = movieSlice.actions

export const movieReducer = movieSlice.reducer

export const {popularMovieSelector} = movieSlice.selectors