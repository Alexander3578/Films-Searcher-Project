import {instance} from '@/common/instance/instance';
import {GetPopularMovieParams, GetPopularMovieTypes} from './movieApi.types';

export const movieApi = {
    getPopularMovieList(params: GetPopularMovieParams) {
        return instance.get<GetPopularMovieTypes>(`/movie/popular`, {
            params,
        })
    }
}