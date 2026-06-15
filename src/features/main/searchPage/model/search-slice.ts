import {createAppSlice} from '@/common/utils/createAppSlice';
import {setAppStatusAC} from '@/app/app-slice';
import {GetSearchMovieParams} from '../api/searchApi.types';
import {MovieType} from '../../mainPage/api/movieApi.types';
import {searchApi} from '../api/searchApi';

type SearchState = {
    search: MovieType | null
}
export const searchSlice = createAppSlice({
    name: 'search',
    initialState: {
        search: null
    } as SearchState,
    reducers: (create) => ({
        getSearchMovieTC: create.asyncThunk(
            async (params: GetSearchMovieParams, thunkAPI) => {
                try {
                    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))

                    const res = await searchApi.getSearchMovie(params)

                    thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))

                    return {search: res.data}
                } catch (err) {
                    thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))

                    return thunkAPI.rejectWithValue(err)
                }
            },
            {
                fulfilled: (state, action) => {
                    state.search = action.payload.search
                }
            },
        )
    }),
    selectors: {
        searchMovieSelector: (state) => state.search
    }
})

export const {getSearchMovieTC} = searchSlice.actions

export const searchReducer = searchSlice.reducer

export const {searchMovieSelector} = searchSlice.selectors