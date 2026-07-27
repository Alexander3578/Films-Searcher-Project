import {instance} from '@/common/instance/instance';
import {GetMovieParams, MovieType, MovieTypeWithDates} from './movieApi.types';
import {request} from '@/common/utils';
import {movieSchema, movieTypeWithDatesSchema} from '../model/schemas/mainSchemas';

export const movieApi = {
    getPopularMovieList(params: GetMovieParams) {
        return request(instance.get<MovieType>(`/movie/popular`, {params}), movieSchema)
    },
    getTopRatedMovieList(params: GetMovieParams) {
        return request(instance.get<MovieType>(`/movie/top_rated`, {params}), movieSchema)
    },
    getNowPlayingMovieList(params: GetMovieParams) {
        return request(instance.get<MovieTypeWithDates>(`/movie/now_playing`, {params}), movieTypeWithDatesSchema)
    },
    getUpcomingMovieList(params: GetMovieParams) {
        return request(instance.get<MovieTypeWithDates>(`/movie/upcoming`, {params}), movieTypeWithDatesSchema)
    },
}