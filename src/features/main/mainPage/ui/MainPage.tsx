import React, {useEffect, useState} from 'react';
import {
    fetchNowPlayingMovieTC,
    fetchPopularMovieTC,
    fetchTopRatedMovieTC, fetchUpcomingMovieTC, nowPlayingMovieSelector,
    popularMovieSelector, topRatedMovieSelector, upcomingMovieSelector
} from '../model/movie-slice';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {MovieResults} from '../api/movieApi.types';
import {SearchMainBlock} from './searchMainBlock/SearchMainBlock';
import styles from './MainPage.module.scss'
import {MovieCategoryLine} from './movieCategoryLine/MovieCategoryLine';
import {MovieCategory} from '../../../../common/enums/enums';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Container} from '@/components/stylesComponents/container/Container';

export const MainPage = () => {

    const dispatch = useAppDispatch()
    const popularMovie = useAppSelector(popularMovieSelector)
    const upcomingMovie = useAppSelector(upcomingMovieSelector)
    const topRatedMovie = useAppSelector(topRatedMovieSelector)
    const nowPlayingMovie = useAppSelector(nowPlayingMovieSelector)

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
        dispatch(fetchTopRatedMovieTC({}))
        dispatch(fetchNowPlayingMovieTC({}))
        dispatch(fetchUpcomingMovieTC({}))
    }, [])

    const backgroundImage = heroMovie
        ? `https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`
        : ''

    const allMovieLoaded = popularMovie && upcomingMovie && topRatedMovie && nowPlayingMovie

    return allMovieLoaded ? (
        <section>
            <div className={styles.hero}
                 style={{
                     backgroundImage: `url(${backgroundImage})`,
                 }}>
                <div className={styles.overlay}/>
                <SearchMainBlock backdropURL={backgroundImage}/>
            </div>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-between'} align={'center'} gap={'30px'}>
                    <MovieCategoryLine title={'Popular Movies'}
                                       movies={popularMovie.results}
                                       category={MovieCategory.POPULAR}/>
                    <MovieCategoryLine title={'Top Rated Movies'}
                                       movies={topRatedMovie.results}
                                       category={MovieCategory.TOP_RATED}/>
                    <MovieCategoryLine title={'Upcoming Movies'}
                                       movies={upcomingMovie.results}
                                       category={MovieCategory.UPCOMING}/>
                    <MovieCategoryLine title={'Now Playing Movies'}
                                       movies={nowPlayingMovie.results}
                                       category={MovieCategory.NOW_PLAYING}/>
                </FlexWrapper>
            </Container>
        </section>
    ) : <div>Loading...</div>
};

