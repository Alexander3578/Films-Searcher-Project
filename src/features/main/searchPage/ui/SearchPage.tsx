import React, {useEffect} from 'react';
import {useSearchParams} from 'react-router';
import {useAppDispatch} from '@/common/hooks';
import {useAppSelector} from '@/common/hooks';
import {getSearchMovieTC, searchMovieSelector} from '../model/search-slice';
import {SearchMovieBlock} from './searchMovieBlock/SearchMovieBlock';
import {MovieCard} from '@/components/movieCard';
import {Typography} from '@/components/typography';
import styles from './SearchPage.module.scss'
import {Container} from '@/components/stylesComponents/container/Container';

export const SearchPage = () => {
    const [params] = useSearchParams();
    const query = params.get('query') || '';

    const dispatch = useAppDispatch();
    const searchMovieResult = useAppSelector(searchMovieSelector);

    useEffect(() => {
        if (query.trim()) {
            dispatch(getSearchMovieTC({
                query,
            }));
        }
    }, [query])


    return (
        <Container>
            <Typography variant={'h1'}
                        className={styles.searchPageTitle}>
                The Search Result
            </Typography>
            <SearchMovieBlock/>
            {searchMovieResult?.results?.map(movie =>
                <MovieCard key={movie.id}
                           imgSrc={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                           title={movie.title}
                           rating={movie.vote_average}/>
            )}
        </Container>
    );
};

