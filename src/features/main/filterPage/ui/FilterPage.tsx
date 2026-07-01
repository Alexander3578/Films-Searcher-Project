import React, {useEffect} from 'react';
import {useAppSelector} from '@/common/hooks';
import {fetchAllMovieTC, selectAllMovie} from '../model/filter-slice';
import {Container} from '@/components/stylesComponents/container/Container';
import {MovieCard} from '@/components/movieCard';
import {useAppDispatch} from '@/common/hooks';
import {FlexWrapper} from '../../../../components/stylesComponents/flexWrapper/FlexWrapper';

export const FilterPage = () => {
    const allMovies = useAppSelector(selectAllMovie)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllMovieTC({}))
    }, [])

    return allMovies ? (
        <section>
            <Container>
                <FlexWrapper wrap={'wrap'} gap={'24px'}>
                    {allMovies?.results.map(movie => <MovieCard movie={movie}/>)}
                </FlexWrapper>
            </Container>
        </section>
    ) : <div>Loading...</div>;
};

