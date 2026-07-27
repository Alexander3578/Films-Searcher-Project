import {instance} from '@/common/instance/instance';
import {GetSearchMovieParams} from './searchApi.types';
import {MovieType} from '../../mainPage/api/movieApi.types';
import {request} from '@/common/utils';
import {movieSchema} from '../../mainPage/model/schemas/mainSchemas';

export const searchApi = {
    getSearchMovie(params: GetSearchMovieParams) {
        return request(instance.get<MovieType>(`/search/movie`, {
            params: {
                ...params,
                include_adult: false,
                page: 1,
                language: 'en-US',
            },
        }), movieSchema)
    }
};

