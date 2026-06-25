import React, {useEffect} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router';
import {MovieCategory} from '@/common/enums/enums';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import styles from './CategoryPage.module.scss'

import {
    fetchNowPlayingMovieTC,
    fetchPopularMovieTC,
    fetchTopRatedMovieTC,
    fetchUpcomingMovieTC,
    selectMoviesByCategory,
} from '../../mainPage/model/movie-slice';
import {MovieCard} from '@/components/movieCard';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Container} from '@/components/stylesComponents/container/Container';
import {Typography} from '@/components/typography';
import {formatCategory} from '@/common/functions/formatCategory/formatCategory';
import {MOVIE_CATEGORY} from '@/common/constants';
import {v4} from 'uuid';
import clsx from 'clsx';

const categories = [
    { id: v4(), label: 'Popular Movies', value: MovieCategory.POPULAR },
    { id: v4(), label: 'Top Rated Movies', value: MovieCategory.TOP_RATED },
    { id: v4(), label: 'Now Playing Movies', value: MovieCategory.NOW_PLAYING },
    { id: v4(), label: 'Upcoming Movies', value: MovieCategory.UPCOMING },
];

export const CategoryPage = () => {
    const {type} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const category = type as MovieCategory | undefined;

    useEffect(() => {
        if (!category) return;

        localStorage.setItem(MOVIE_CATEGORY, category);

        switch (category) {
            case MovieCategory.POPULAR:
                dispatch(fetchPopularMovieTC({page: 1}));
                break;

            case MovieCategory.TOP_RATED:
                dispatch(fetchTopRatedMovieTC({page: 1}));
                break;

            case MovieCategory.NOW_PLAYING:
                dispatch(fetchNowPlayingMovieTC({page: 1}));
                break;

            case MovieCategory.UPCOMING:
                dispatch(fetchUpcomingMovieTC({page: 1}));
                break;
        }
    }, [category, dispatch]);

    const movies = useAppSelector(state =>
        category ? selectMoviesByCategory(state, category) : null
    );

    return  category ? (
        <section className={styles.categorySection}>
            <FlexWrapper justify={'center'}
                         gap={'30px'}
                         className={styles.categoryButtonsWrapper}>
                {categories.map(cat => (
                    <NavLink
                        key={cat.id}
                        to={`/category/${cat.value}`}
                        className={({ isActive }) =>
                            clsx(
                                styles.link,
                                isActive ?  styles.categoryActiveLink : styles.normalLink
                            )
                        }
                    >
                        {cat.label}
                    </NavLink>
                ))}
            </FlexWrapper>
            <Container>
                <Typography className={styles.categoryTitle}
                            variant={'h1'}>
                    {formatCategory(category)} Movies
                </Typography>
                <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={'20px'}>
                    {movies?.results?.map(movie => (
                        <MovieCard
                            key={movie.id}
                            imgSrc={
                                movie.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                                    : ''
                            }
                            title={movie.title}
                            rating={movie.vote_average}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </section>
    ) : <div>Loading...</div>;
};