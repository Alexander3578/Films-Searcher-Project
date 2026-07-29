import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {
    fetchMovieCreditsTC,
    fetchMovieDetailsTC,
    fetchSimilarMoviesTC,
    movieCreditsSelector,
    movieDetailsSelector,
    similarMoviesSelector
} from '../model/details-slice';
import {Container} from '@/components/stylesComponents/container/Container';
import styles from './MoviePage.module.scss'
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Typography} from '@/components/typography';
import {MovieCategoryLine} from '../../mainPage/ui/movieCategoryLine/MovieCategoryLine';
import {CastLine} from './castLine/CastLine';
import {Button} from '@/components/button';
import {formatRuntime} from '@/common/functions/formatTime';
import {MoviePageSkeleton} from './MoviePageSkeleton';

export const MoviePage = () => {

    const {id} = useParams()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const movieDetails = useAppSelector(movieDetailsSelector)
    const similarMovies = useAppSelector(similarMoviesSelector)
    const movieCredits = useAppSelector(movieCreditsSelector)

    useEffect(() => {
        dispatch(fetchMovieDetailsTC({id: Number(id)}))
        dispatch(fetchSimilarMoviesTC({id: Number(id)}))
        dispatch(fetchMovieCreditsTC({id: Number(id)}))
    }, [id])

    if (!movieDetails || !similarMovies || !movieCredits)
        return <MoviePageSkeleton />

    const onBackHandler = () => {
        navigate(-1)
    }

    const ratingStyle =
        movieDetails.vote_average > 7
            ? {
                background: '#22c55e',
                color: '#fff',
            }
            : movieDetails.vote_average >= 4
                ? {
                    background: '#facc15',
                    color: '#000',
                }
                : {
                    background: '#ef4444',
                    color: '#fff',
                };

    return (
        <section className={styles.movieDetails}>
            <Container>
                <div className={styles.movieInfoWrapper}>
                    <FlexWrapper gap={'40px'}>
                        <img src={movieDetails.backdrop_path ?
                            `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` :
                        `https://placehold.co/330x450?text=Poster`}
                             alt={'movie poster'}
                             className={styles.moviePosterImg}/>
                        <div className={styles.movieDetailsWrapper}>
                            <FlexWrapper justify={'space-between'}>
                                <Typography variant={'h1'}
                                            className={styles.movieName}>
                                    {movieDetails.title}
                                </Typography>
                                <Button variant={'secondary'}
                                        className={styles.backBtn}
                                        onClick={onBackHandler}>Back</Button>
                            </FlexWrapper>

                            <div className={styles.movieReleaseRatingTime}>
                                <FlexWrapper gap={'10px'} align={'center'}>
                                    <Typography variant={'h4'} className={styles.releaseYear}>
                                        Release year: {movieDetails.release_date.slice(0, 4)}
                                    </Typography>

                                    <div className={styles.rating} style={ratingStyle}>
                                        {movieDetails.vote_average?.toFixed(1) ?? '-'}
                                    </div>

                                    <Typography variant={'h4'} className={styles.movieTime}>
                                        Runtime: {formatRuntime(movieDetails.runtime)}
                                    </Typography>
                                </FlexWrapper>
                            </div>

                            <Typography className={styles.overview}
                                        colorBalance={500}>
                                {movieDetails.overview}
                            </Typography>

                            <div className={styles.genresBlock}>
                                <Typography variant={'h2'}
                                            className={styles.genresTitle}>Genres</Typography>
                                <FlexWrapper wrap={'wrap'} gap={'10px'}>
                                    {movieDetails.genres.map(genre =>
                                        <span key={genre.id}
                                              className={styles.genre}>
                                            {genre.name}
                                        </span>)}
                                </FlexWrapper>
                            </div>
                            {movieDetails.genres.map((genre) =>
                                <Typography key={genre.id}>{genre.name}</Typography>)}
                        </div>
                    </FlexWrapper>
                </div>
                <CastLine credits={movieCredits.cast}/>
                <MovieCategoryLine title={'Similar Movies'}
                                   movies={similarMovies.results}/>
            </Container>
        </section>
    )
};

