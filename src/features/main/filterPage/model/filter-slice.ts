import {createAppSlice} from '@/common/utils/createAppSlice';
import {filterApi} from '../api/filterApi';
import {FilterState, GetAllMovieParams, MovieState, SortBy} from '../api/filterApi.types';
import {setAppStatusAC} from '@/app/app-slice';
import {FILTER_STORAGE_KEY} from '@/common/constants';

const loadFilters = (): FilterState => {
    try {
        const data = localStorage.getItem(FILTER_STORAGE_KEY)

        return data
            ? JSON.parse(data)
            : {
                sortBy: 'popularity.desc',
                minRating: 0,
                maxRating: 10,
            }

    } catch {
        return {
            sortBy: 'popularity.desc',
            minRating: 0,
            maxRating: 10,
        }
    }
}

const initialFiltersState = loadFilters()

export const filterSlice = createAppSlice({
    name: 'filter',
    initialState: {
        movies: null,
        filters: initialFiltersState
    } as MovieState,
    reducers: (create) => ({
        setSortByAC: create.reducer<{ sortBy: SortBy }>(
            (state, action) => {
                state.filters.sortBy = action.payload.sortBy
            }),


        setRatingAC: create.reducer<[number, number]>((state, action) => {
            state.filters.minRating = action.payload[0]
            state.filters.maxRating = action.payload[1]
        }),

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
        selectFilters: (state) => state.filters
    }
})

export const {fetchAllMovieTC, setRatingAC, setSortByAC} = filterSlice.actions
export const filterReducer = filterSlice.reducer

export const {selectAllMovie, selectFilters} = filterSlice.selectors
