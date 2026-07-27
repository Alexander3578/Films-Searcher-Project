import {instance} from '@/common/instance/instance';
import {MovieCreditsType, MovieDetailsParams, MovieDetailsType} from './movieDetailsApi.types';
import {GetMovieParams, MovieType} from '../../mainPage/api/movieApi.types';
import {request} from '@/common/utils';
import {movieCreditsSchema, movieDetailsSchema} from '../model/schemas/detailsSchemas';
import {movieSchema} from '../../mainPage/model/schemas/mainSchemas';

export const movieDetailsApi = {
    getMovieDetails(id: number, params?: MovieDetailsParams) {
        return request(instance.get<MovieDetailsType>(`/movie/${id}`, {params}), movieDetailsSchema)
    },
    getSimilarMovies(id: number, params?: GetMovieParams) {
        return request(instance.get<MovieType>(`/movie/${id}/similar`, {params}), movieSchema)
    },
    getMovieCredits(id: number, params?: MovieDetailsParams) {
        return request(instance.get<MovieCreditsType>(`/movie/${id}/credits`, {params}), movieCreditsSchema)
    },
}