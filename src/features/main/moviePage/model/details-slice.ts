import {createAppSlice} from '@/common/utils/createAppSlice';
import {setAppStatusAC} from '@/app/app-slice';
import {MovieDetailsParams, MovieDetailsType} from '../api/movieDetailsApi.types';
import {GetMovieParams, MovieType} from '../../mainPage/api/movieApi.types';
import {movieDetailsApi} from '../api/movieDetailsApi';

type DetailsState = {
    movieDetails: MovieDetailsType | null
    similarMovies: MovieType | null
}
export const detailsSlice = createAppSlice({
    name: 'details',
    initialState: {
        movieDetails: null,
        similarMovies: null

    } as DetailsState,
    reducers: (create) => ({
        fetchMovieDetailsTC: create.asyncThunk(
            async (params: { id: number, params?: MovieDetailsParams }, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))

                    const res =
                        await movieDetailsApi.getMovieDetails(params.id, params.params)

                    thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))

                    return {movieDetails: res.data}
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.movieDetails = action.payload.movieDetails
                },
            },
        ),
        fetchSimilarMoviesTC: create.asyncThunk(
            async (params: { id: number, params?: GetMovieParams }, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))

                    const res =
                        await movieDetailsApi.getSimilarMovies(params.id, params.params)

                    thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))

                    return {similarMovies: res.data}
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.similarMovies = action.payload.similarMovies
                },
            },
        ),

    }),
    selectors: {
        movieDetailsSelector: (state) => state.movieDetails,
        similarMoviesSelector: (state) => state.similarMovies,
    }
})

export const {
    fetchMovieDetailsTC, fetchSimilarMoviesTC
} = detailsSlice.actions

export const movieDetailsReducer = detailsSlice.reducer

export const {
    movieDetailsSelector,
    similarMoviesSelector
} = detailsSlice.selectors

