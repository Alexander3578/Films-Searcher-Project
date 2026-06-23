import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router';
import {Button} from '@/components/button';
import {MovieCategory} from '@/common/enums/enums';
import {useAppDispatch, useAppSelector} from '@/common/hooks';

import {
    fetchNowPlayingMovieTC,
    fetchPopularMovieTC,
    fetchTopRatedMovieTC,
    fetchUpcomingMovieTC,
    selectMoviesByCategory,
} from '../../mainPage/model/movie-slice';

import {MOVIE_CATEGORY} from '../../../../common/constants';
import {MovieCard} from '@/components/movieCard';

export const CategoryPage = () => {
    const {type} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const category = type as MovieCategory | undefined;

    // 1. REDIRECT если нет категории
    useEffect(() => {
        if (category) return;

        const saved = localStorage.getItem(MOVIE_CATEGORY) as MovieCategory | null;
        const defaultCategory = saved ?? MovieCategory.POPULAR;

        navigate(`/category/${defaultCategory}`, {replace: true});
    }, [category, navigate]);

    // 2. FETCH данных
    useEffect(() => {
        if (!category) return;

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

    // 3. DATA из Redux
    const movies = useAppSelector(state =>
        category ? selectMoviesByCategory(state, category) : null
    );

    // 4. смена категории
    const changeCategory = (cat: MovieCategory) => {
        localStorage.setItem(MOVIE_CATEGORY, cat);
        navigate(`/category/${cat}`);
    };

    return (
        <>
            {/* NAVIGATION */}
            <div style={{display: 'flex', gap: 10, marginBottom: 20}}>
                <Button onClick={() => changeCategory(MovieCategory.POPULAR)}>
                    Popular
                </Button>

                <Button onClick={() => changeCategory(MovieCategory.TOP_RATED)}>
                    Top Rated
                </Button>

                <Button onClick={() => changeCategory(MovieCategory.NOW_PLAYING)}>
                    Now Playing
                </Button>

                <Button onClick={() => changeCategory(MovieCategory.UPCOMING)}>
                    Upcoming
                </Button>
            </div>

            {/* CURRENT CATEGORY */}
            <div>
                Текущая категория: {category}
            </div>

            {/* MOVIES LIST */}
            <div style={{display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 20}}>
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
            </div>
        </>
    );
};