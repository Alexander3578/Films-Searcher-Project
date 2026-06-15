import {instance} from '@/common/instance/instance';
import {GetSearchMovieParams} from './searchApi.types';

export const searchApi = {
    getSearchMovie(params: GetSearchMovieParams) {
        return instance.get(`/search/movie`, {
            params: {
                ...params,
                include_adult: false,
                page: 1,
                language: 'en-US',
            },
        })
    }
};

