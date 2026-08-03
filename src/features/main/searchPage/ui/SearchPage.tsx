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
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {MovieCardSkeleton} from '@/components/movieCard';
import {selectStatus} from '@/app/app-slice';

export const SearchPage = () => {
    const [params] = useSearchParams();
    const query = params.get('query') || '';

    const dispatch = useAppDispatch();
    const searchMovieResult = useAppSelector(searchMovieSelector);
    const status = useAppSelector(selectStatus);

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
            <SearchMovieBlock />
            <FlexWrapper wrap="wrap" gap="24px">
                {status === 'loading' ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <MovieCardSkeleton
                            key={index}
                            maxWidth={250}
                            height={370}
                        />
                    ))
                ) : searchMovieResult ? (
                    searchMovieResult.results.length ?  searchMovieResult.results.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            maxWidth={250}
                            height={370}
                        />
                    )) : <Typography
                        className={styles.searchCaption}
                        as="p"
                        variant="h2"
                    >
                        No matches found for {query}
                    </Typography>
                ) : (
                    <Typography
                        className={styles.searchCaption}
                        as="p"
                        variant="h2"
                    >
                        Enter a movie title to start searching.
                    </Typography>
                )}
            </FlexWrapper>
        </Container>
    );
};

