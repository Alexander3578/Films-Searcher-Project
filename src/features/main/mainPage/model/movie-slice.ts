import {createAppSlice} from '@/common/utils/createAppSlice';
import {GetMovieParams, MovieType, MovieTypeWithDates} from '../api/movieApi.types';
import {movieApi} from '../api/movieApi';
import {setAppStatusAC} from '@/app/app-slice';

type MovieState = {
    popular: MovieType | null,
    topRated: MovieType | null,
    nowPlaying: MovieTypeWithDates | null,
    upcoming: MovieTypeWithDates | null,
}
export const movieSlice = createAppSlice({
    name: 'movie',
    initialState: {
        popular: null,
        topRated: null,
        nowPlaying: null,
        upcoming: null,

    } as MovieState,
    reducers: (create) => ({
        fetchPopularMovieTC: create.asyncThunk(
            async (params: GetMovieParams, thunkAPI) => {
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
        ),
        fetchTopRatedMovieTC: create.asyncThunk(
            async (params: GetMovieParams, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }))

                    const res = await movieApi.getTopRatedMovieList(params)

                    thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }))

                    return { topRated: res.data }
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'failed' }))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.topRated = action.payload.topRated
                },
            },
        ),
        fetchNowPlayingMovieTC: create.asyncThunk(
            async (params: GetMovieParams, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }))

                    const res = await movieApi.getNowPlayingMovieList(params)

                    thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }))

                    return { nowPlaying: res.data }
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'failed' }))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.nowPlaying = action.payload.nowPlaying
                },
            },
        ),
        fetchUpcomingMovieTC: create.asyncThunk(
            async (params: GetMovieParams, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }))

                    const res = await movieApi.getUpcomingMovieList(params)

                    thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }))

                    return { upcoming: res.data }
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({ status: 'failed' }))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.upcoming = action.payload.upcoming
                },
            },
        ),
    }),
    selectors: {
        popularMovieSelector: (state) => state.popular
    }
})

export const {fetchPopularMovieTC} = movieSlice.actions

export const movieReducer = movieSlice.reducer

export const {popularMovieSelector} = movieSlice.selectors