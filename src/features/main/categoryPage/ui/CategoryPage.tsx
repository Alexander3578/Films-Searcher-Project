import React, {useEffect} from 'react';
import {NavLink, useParams, useSearchParams} from 'react-router';
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
import {Pagination} from '@/components/pagination';

const categories = [
    { id: v4(), label: 'Popular Movies', value: MovieCategory.POPULAR },
    { id: v4(), label: 'Top Rated Movies', value: MovieCategory.TOP_RATED },
    { id: v4(), label: 'Now Playing Movies', value: MovieCategory.NOW_PLAYING },
    { id: v4(), label: 'Upcoming Movies', value: MovieCategory.UPCOMING },
];

export const CategoryPage = () => {
    const {type} = useParams();
    const dispatch = useAppDispatch();

    const category = type as MovieCategory | undefined;

    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page') ?? 1);

    useEffect(() => {
        if (!category) return;

        localStorage.setItem(MOVIE_CATEGORY, category);

        switch (category) {
            case MovieCategory.POPULAR:
                dispatch(fetchPopularMovieTC({page}));
                break;

            case MovieCategory.TOP_RATED:
                dispatch(fetchTopRatedMovieTC({page}));
                break;

            case MovieCategory.NOW_PLAYING:
                dispatch(fetchNowPlayingMovieTC({page}));
                break;

            case MovieCategory.UPCOMING:
                dispatch(fetchUpcomingMovieTC({page}));
                break;
        }
    }, [category, page, dispatch]);

    const movies = useAppSelector(state =>
        category ? selectMoviesByCategory(state, category) : null
    );

    const onChangePageHandler = (newPage: number) => {
        setSearchParams({ page: String(newPage) });
    }

    return  category && movies ? (
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
                <FlexWrapper wrap={'wrap'} gap={'24px'}>
                    {movies?.results?.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </FlexWrapper>
            </Container>
            <Pagination count={movies.total_pages}
                        onChange={onChangePageHandler}
                        page={page} />
        </section>
    ) : <div>Loading...</div>;
};