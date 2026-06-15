import React, {useEffect, useState} from 'react';
import {fetchPopularMovieTC, popularMovieSelector} from '../model/movie-slice';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {MovieResults} from '../api/movieApi.types';
import {SearchMainBlock} from './searchMainBlock/SearchMainBlock';
import styles from './MainPage.module.scss'

export const MainPage = () => {

    const dispatch = useAppDispatch()
    const popularMovie = useAppSelector(popularMovieSelector)

    const [heroMovie, setHeroMovie] =
        useState<MovieResults | null>(null)

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
            <section>
                <div className={styles.hero}
                     style={{
                         backgroundImage: `url(${backgroundImage})`,
                     }}>
                    <div className={styles.overlay}/>
                    <SearchMainBlock backdropURL={backgroundImage}/>
                </div>
            </section> :
            <div>Loading</div>
    );
};

