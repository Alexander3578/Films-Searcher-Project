import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {fetchAllMovieTC, selectAllMovie, selectFilters, setRatingAC, setSortByAC} from '../model/filter-slice';
import {Container} from '@/components/stylesComponents/container/Container';
import {MovieCard} from '@/components/movieCard';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Typography} from '@/components/typography';
import {Select} from '@/components/select';
import styles from './FilterPage.module.scss'
import {CustomSlider} from '@/components/slider';
import {SortBy} from '../api/filterApi.types';

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
    const filtersValue = useAppSelector(selectFilters)

    const dispatch = useAppDispatch()

    const rating: [number, number] = [
        filtersValue.minRating,
        filtersValue.maxRating
    ]

    const changeRatingHandler = (currentRating: [min: number, max: number]) => {
        dispatch(setRatingAC(currentRating))
    }

    const onChangeSortBy = (sortBy: SortBy) => {
        dispatch(setSortByAC({sortBy}))
    }

    useEffect(() => {
        const bundler = setTimeout(() => {
            dispatch(fetchAllMovieTC({
                sort_by: filtersValue.sortBy,
                'vote_average.gte': filtersValue.minRating,
                'vote_average.lte': filtersValue.maxRating
            }))
        }, 500)


        return () => clearTimeout(bundler)
    }, [filtersValue.minRating, filtersValue.maxRating, filtersValue.sortBy, dispatch])

    return allMovies ? (
        <div className={styles.filterPage}>
            <Container>
                <FlexWrapper gap={'20px'}>
                    <aside className={styles.filterAsideBlock}>
                        <Typography variant={'h2'}
                                    colorBalance={300}
                                    className={styles.filterAsideTitle}>
                            Filters / Sort
                        </Typography>
                        <FlexWrapper gap={'15px'}>
                            <Typography colorBalance={300}
                                        className={styles.filterAsideText}>
                                Sort By:
                            </Typography>
                            <Select options={selectValues}
                                    value={filtersValue.sortBy}
                                    defaultValue={'popularity.desc'}
                                    className={styles.filterSelect}
                                    onValueChange={onChangeSortBy}/>
                        </FlexWrapper>
                        <div>
                            <Typography colorBalance={300}
                                        className={styles.filterAsideText}>
                                Rating:
                            </Typography>
                            <CustomSlider max={10}
                                          min={0}
                                          step={0.1}
                                          value={rating}
                                          onValueChange={changeRatingHandler}/>
                        </div>
                    </aside>
                    <section>
                        <FlexWrapper wrap={'wrap'} gap={'24px'}>
                            {allMovies?.results.map(movie => <MovieCard key={movie.id}
                                                                        movie={movie}
                                                                        maxWidth={170}
                                                                        height={260}/>)}
                        </FlexWrapper>
                    </section>
                </FlexWrapper>
            </Container>
        </div>
    ) : <div>Loading...</div>;
};

