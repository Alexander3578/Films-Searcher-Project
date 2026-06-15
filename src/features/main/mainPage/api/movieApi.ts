import {instance} from '@/common/instance/instance';
import {GetPopularMovieParams, MovieType} from './movieApi.types';

export const movieApi = {
    getPopularMovieList(params: GetPopularMovieParams) {
        return instance.get<MovieType>(`/movie/popular`, {
            params,
        })
    }
}