import {instance} from '@/common/instance/instance';
import {MovieDetailsParams, MovieDetailsType} from './movieDetailsApi.types';
import {GetMovieParams, MovieType} from '../../mainPage/api/movieApi.types';

export const movieDetailsApi = {
    getMovieDetails(id: number, params?: MovieDetailsParams) {
        return instance.get<MovieDetailsType>(`/movie/${id}`, {
            params,
        })
    },
    getSimilarMovies(id: number, params?: GetMovieParams) {
        return instance.get<MovieType>(`/movie/${id}/similar`, {
            params,
        })
    },
}