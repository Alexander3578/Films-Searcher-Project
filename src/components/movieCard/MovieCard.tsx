import React from 'react';
import styles from './MovieCard.module.scss'
import {Typography} from '../typography';
import clsx from 'clsx';
import {MovieResults} from '@/features/main/mainPage/api/movieApi.types';
import {useFavoriteMovie} from '@/common/hooks';

type Props = {
    movie: MovieResults
}

export const MovieCard = ({movie}: Props) => {

    const {toggle, isFavorite} = useFavoriteMovie(movie)

    const hasImage = movie.backdrop_path && !movie.backdrop_path.endsWith('null');

    const ratingStyle =
        movie.vote_average > 7
            ? {
                background: '#22c55e',
                color: '#fff',
            }
            : movie.vote_average >= 4
                ? {
                    background: '#facc15',
                    color: '#000',
                }
                : {
                    background: '#ef4444',
                    color: '#fff',
                };

    return (
        <div className={styles.movieCard}>
            <div className={styles.movieImg}
                 style={hasImage ? {
                     backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                 } : {background: `#3d3c3c`}}>
                <div className={styles.overlay}/>

                <button
                    className={clsx(
                        styles.favoriteBtn,
                        isFavorite && styles.favoriteActive
                    )}
                    onClick={toggle}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
                <div className={styles.rating} style={ratingStyle}>
                    {movie.vote_average.toFixed()}
                </div>
            </div>
            <Typography variant={'h3'} className={styles.movieTitle}>{movie.title}</Typography>
        </div>
    );
};




