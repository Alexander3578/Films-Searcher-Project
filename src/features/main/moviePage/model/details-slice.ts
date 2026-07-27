import {createAppSlice} from '@/common/utils/createAppSlice';
import {setAppStatusAC} from '@/app/app-slice';
import {MovieCreditsType, MovieDetailsParams, MovieDetailsType} from '../api/movieDetailsApi.types';
import {GetMovieParams, MovieType} from '../../mainPage/api/movieApi.types';
import {movieDetailsApi} from '../api/movieDetailsApi';
import {handleServerNetworkError} from '@/common/utils';

type DetailsState = {
    movieDetails: MovieDetailsType | null
    similarMovies: MovieType | null
    movieCredits: MovieCreditsType | null
}
export const detailsSlice = createAppSlice({
    name: 'details',
    initialState: {
        movieDetails: null,
        similarMovies: null,
        movieCredits: null

    } as DetailsState,
    reducers: (create) => ({
        fetchMovieDetailsTC: create.asyncThunk(
            async (params: { id: number, params?: MovieDetailsParams }, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))

                    const res =
                        await movieDetailsApi.getMovieDetails(params.id, params.params)

                    thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))

                    return {movieDetails: res}
                } catch (err) {
                    handleServerNetworkError(err, thunkAPI.dispatch)
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

                    return {similarMovies: res}
                } catch (err) {
                    handleServerNetworkError(err, thunkAPI.dispatch)
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
        fetchMovieCreditsTC: create.asyncThunk(
            async (params: { id: number, params?: GetMovieParams }, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))

                    const res =
                        await movieDetailsApi.getMovieCredits(params.id, params.params)

                    thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))

                    return {movieCredits: res}
                } catch (err) {
                    handleServerNetworkError(err, thunkAPI.dispatch)
                    thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.movieCredits = action.payload.movieCredits
                },
            },
        ),

    }),
    selectors: {
        movieDetailsSelector: (state) => state.movieDetails,
        similarMoviesSelector: (state) => state.similarMovies,
        movieCreditsSelector: (state) => state.movieCredits
    }
})

export const {
    fetchMovieDetailsTC, fetchSimilarMoviesTC, fetchMovieCreditsTC
} = detailsSlice.actions

export const movieDetailsReducer = detailsSlice.reducer

export const {
    movieDetailsSelector,
    similarMoviesSelector, movieCreditsSelector
} = detailsSlice.selectors

