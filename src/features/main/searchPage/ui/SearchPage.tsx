import React, {useEffect} from 'react';
import {useSearchParams} from 'react-router';
import {useAppDispatch} from '@/common/hooks';
import {useAppSelector} from '@/common/hooks';
import {getSearchMovieTC, searchMovieSelector} from '../model/search-slice';
import {SearchMovieBlock} from './searchMovieBlock/SearchMovieBlock';

export const SearchPage = () => {
    const [params] = useSearchParams();
    const query = params.get('query') || '';

    const dispatch = useAppDispatch();
    const searchResult = useAppSelector(searchMovieSelector);

    useEffect(() => {
        if (query.trim()) {
            dispatch(getSearchMovieTC({
                query,
            }));
        }
    }, [query])

    return (
        <div>
            <SearchMovieBlock />
            {searchResult?.results?.map(movie => (
                <div key={movie.id}>
                    {movie.title}
                </div>
            ))}
        </div>
    );
};

