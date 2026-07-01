import {instance} from '@/common/instance/instance';
import {GetAllMovieParams} from './filterApi.types';
import {MovieType} from '../../mainPage/api/movieApi.types';

export const filterApi = {
    getAllMovieList(params: GetAllMovieParams) {
        return instance.get<MovieType>(`/discover/movie`, {
            params,
        })
    },
}