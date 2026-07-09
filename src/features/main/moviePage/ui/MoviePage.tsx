import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useAppDispatch} from '@/common/hooks';
import {
    fetchMovieDetailsTC,
    fetchSimilarMoviesTC,
    movieDetailsSelector,
    similarMoviesSelector
} from '../model/details-slice';
import {useAppSelector} from '@/common/hooks';
import {Container} from '@/components/stylesComponents/container/Container';
import styles from './MoviePage.module.scss'

export const MoviePage = () => {

    const {id} = useParams()

    const dispatch = useAppDispatch()

    const movieDetails = useAppSelector(movieDetailsSelector)
    const similarMovies = useAppSelector(similarMoviesSelector)

    useEffect(() => {
        dispatch(fetchMovieDetailsTC({id: Number(id)}))
        dispatch(fetchSimilarMoviesTC({id: Number(id)}))
    }, [id])

    return movieDetails && similarMovies ? (
        <section className={styles.movieDetails}>
            <Container>
                <img src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                     alt={'movie poster'}
                     className={styles.moviePosterImg}/>
            </Container>
        </section>
    ) : <div>Loading...</div>;
};

