import {instance} from '@/common/instance/instance';
import {GetAllMovieParams} from './filterApi.types';
import {MovieType} from '../../mainPage/api/movieApi.types';
import {movieSchema} from '../../mainPage/model/schemas/mainSchemas';
import {request} from '@/common/utils';

export const filterApi = {
    getAllMovieList(params: GetAllMovieParams) {
        return request(
            instance.get<MovieType>(`/discover/movie`, {params}),
            movieSchema)
    },
}