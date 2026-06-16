import {instance} from '@/common/instance/instance';
import {GetMovieParams, MovieType, MovieTypeWithDates} from './movieApi.types';

export const movieApi = {
    getPopularMovieList(params: GetMovieParams) {
        return instance.get<MovieType>(`/movie/popular`, {
            params,
        })
    },
    getTopRatedMovieList(params: GetMovieParams) {
        return instance.get<MovieType>(`/movie/top_rated`, {
            params,
        })
    },
    getNowPlayingMovieList(params: GetMovieParams) {
        return instance.get<MovieTypeWithDates>(`/movie/now_playing`, {
            params,
        })
    },
    getUpcomingMovieList(params: GetMovieParams) {
        return instance.get<MovieTypeWithDates>(`/movie/upcoming`, {
            params,
        })
    },
}