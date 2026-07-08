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
    'vote_average.gte'?: number
    'vote_average.lte'?: number
    with_genres?: string
}

export type FilterState = {
    sortBy: SortBy,
    minRating: number,
    maxRating: number,
    genres: number[]
}

export type MovieState = {
    movies: MovieType | null
    filters: FilterState
}

type GenresId = 28 | 12 | 16 | 35 | 80 | 99 | 18 | 10751 | 14 | 36 | 27 | 10402 | 9648 | 10749
    | 878 | 10770 | 53 | 10752 | 37

type GenresName = 'Action' | 'Abenteuer' | 'Animation' | 'Komödie' | 'Krimi' | 'Dokumentarfilm' | 'Drama' | 'Familie'
    | 'Fantasy' | 'Historie' | 'Horror' | 'Musik' | 'Mystery' | 'Liebesfilm' | 'Science Fiction' | 'TV-Film'
    | 'Thriller' | 'Kriegsfilm' | 'Western'

export type GenresType = {
    id: GenresId
    name: GenresName
}

