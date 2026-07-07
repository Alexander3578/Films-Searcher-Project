import {MovieType} from '../../mainPage/api/movieApi.types';

export type SortBy =
    'original_title.asc'
    | 'original_title.desc'
    | 'popularity.asc'
    | 'popularity.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'title.asc'
    | 'title.desc'
    | 'primary_release_date.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc'

export type GetAllMovieParams = {
    include_adult?: boolean
    include_video?: boolean
    language?: string
    page?: number
    sort_by?: SortBy
    "vote_average.gte"?: number
    "vote_average.lte"?: number
}

export type FilterState = {
    sortBy: SortBy,
    minRating: number,
    maxRating: number,
}

export type MovieState = {
    movies: MovieType | null
    filters: FilterState
}