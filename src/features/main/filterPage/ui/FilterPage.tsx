import React, {useEffect} from 'react';
import {useAppSelector} from '@/common/hooks';
import {fetchAllMovieTC, selectAllMovie} from '../model/filter-slice';
import {Container} from '@/components/stylesComponents/container/Container';
import {MovieCard} from '@/components/movieCard';
import {useAppDispatch} from '@/common/hooks';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Typography} from '@/components/typography';
import {Select} from '@/components/select';
import styles from './FilterPage.module.scss'

const selectValues = [
    {value: 'popularity.asc', label: 'Popularity ↑'},
    {value: 'popularity.desc', label: 'Popularity ↓'},
    {value: 'vote_average.asc', label: 'Rating ↑'},
    {value: 'vote_average.desc', label: 'Rating ↓'},
    {value: 'primary_release_date.asc', label: 'Release Date ↑'},
    {value: 'primary_release_date.desc', label: 'Release Date ↓'},
    {value: 'title.desc', label: 'Title A-Z'},
    {value: 'title.asc', label: 'Title Z-A'},
]

export const FilterPage = () => {
    const allMovies = useAppSelector(selectAllMovie)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllMovieTC({}))
    }, [])

    return allMovies ? (
        <div className={styles.filterPage}>
            <Container>
                <FlexWrapper gap={'20px'}>
                    <aside className={styles.filterAsideBlock}>
                        <Typography variant={'h2'}>Filters / Sort</Typography>
                        <FlexWrapper gap={'15px'}>
                            <Typography>Sort By:</Typography>
                            <Select options={selectValues}
                                    defaultValue={'popularity.desc'}
                                    className={styles.filterSelect}/>
                        </FlexWrapper>

                    </aside>
                    <section>
                        <FlexWrapper wrap={'wrap'} gap={'24px'}>
                            {allMovies?.results.map(movie => <MovieCard movie={movie}
                                                                        maxWidth={170} height={260}/>)}
                        </FlexWrapper>
                    </section>
                </FlexWrapper>
            </Container>
        </div>
    ) : <div>Loading...</div>;
};

