import React, {useEffect, useState} from 'react';
import {fetchPopularMovieTC, popularMovieSelector} from '../model/movie-slice';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {PopularMovieResults} from '../api/movieApi.types';
import {SearchMovieBlock} from './searchMovieBlock/SearchMovieBlock';

export const MainPage = () => {

    const dispatch = useAppDispatch()
    const popularMovie = useAppSelector(popularMovieSelector)

    const [heroMovie, setHeroMovie] =
        useState<PopularMovieResults | null>(null)

    useEffect(() => {
        if (popularMovie?.results.length) {
            const randomIndex = Math.floor(
                Math.random() * popularMovie.results.length
            )

            setHeroMovie(popularMovie.results[randomIndex])
        }
    }, [popularMovie])


    useEffect(() => {
        dispatch(fetchPopularMovieTC({}))
    }, [])

    const backgroundImage = heroMovie
        ? `https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`
        : ''

    return (
        popularMovie ?
            <section >
                <SearchMovieBlock backdropURL={backgroundImage} />
            </section> :
            <div>Loading</div>
    );
};

