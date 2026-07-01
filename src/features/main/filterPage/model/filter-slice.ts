import {createAppSlice} from '@/common/utils/createAppSlice';
import {MovieType} from '../../mainPage/api/movieApi.types';
import {filterApi} from '../api/filterApi';
import {GetAllMovieParams} from '../api/filterApi.types';
import {setAppStatusAC} from '@/app/app-slice';

type MovieState = {
    movies: MovieType | null
}

export const filterSlice = createAppSlice({
    name: 'filter',
    initialState: {
        movies: null
    } as MovieState,
    reducers: (create) => ({
        fetchAllMovieTC: create.asyncThunk(
            async (params: GetAllMovieParams, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))

                    const res = await filterApi.getAllMovieList(params)

                    thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))

                    return {movie: res.data}
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.movies = action.payload.movie
                },
            },
        ),
    }),
    selectors: {
        selectAllMovie: (state) => state.movies,
    }
})

export const {fetchAllMovieTC} = filterSlice.actions
export const filterReducer = filterSlice.reducer

export const {selectAllMovie} = filterSlice.selectors
