import React, {useEffect} from 'react';
import {fetchPopularMovieTC, popularMovieSelector} from '../model/movie-slice';
import {useAppDispatch, useAppSelector} from '@/common/hooks';

export const MainPage = () => {

    const dispatch = useAppDispatch()
    const popularMovie = useAppSelector(popularMovieSelector)

    useEffect(() => {
        dispatch(fetchPopularMovieTC({}))
    }, [])

    return (
        popularMovie ?
        <div>
            {popularMovie.results.map(movie => <div>
                {movie.title}
            </div>)}
        </div> : <div>Loading</div>
    );
};

