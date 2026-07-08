import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {
    fetchAllMovieTC,
    resetFiltersAC,
    selectAllMovie,
    selectFilters,
    setRatingAC,
    setSortByAC, toggleGenreAC
} from '../model/filter-slice';
import {Container} from '@/components/stylesComponents/container/Container';
import {MovieCard} from '@/components/movieCard';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Typography} from '@/components/typography';
import {Select} from '@/components/select';
import styles from './FilterPage.module.scss'
import {CustomSlider} from '@/components/slider';
import {GenresType, SortBy} from '../api/filterApi.types';
import {Button} from '@/components/button';
import clsx from 'clsx';
import {Pagination} from '@/components/pagination';
import {useSearchParams} from 'react-router';

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

const genresValues: GenresType[] = [
    {
        'id': 28,
        'name': 'Action'
    },
    {
        'id': 12,
        'name': 'Abenteuer'
    },
    {
        'id': 16,
        'name': 'Animation'
    },
    {
        'id': 35,
        'name': 'Komödie'
    },
    {
        'id': 80,
        'name': 'Krimi'
    },
    {
        'id': 99,
        'name': 'Dokumentarfilm'
    },
    {
        'id': 18,
        'name': 'Drama'
    },
    {
        'id': 10751,
        'name': 'Familie'
    },
    {
        'id': 14,
        'name': 'Fantasy'
    },
    {
        'id': 36,
        'name': 'Historie'
    },
    {
        'id': 27,
        'name': 'Horror'
    },
    {
        'id': 10402,
        'name': 'Musik'
    },
    {
        'id': 9648,
        'name': 'Mystery'
    },
    {
        'id': 10749,
        'name': 'Liebesfilm'
    },
    {
        'id': 878,
        'name': 'Science Fiction'
    },
    {
        'id': 10770,
        'name': 'TV-Film'
    },
    {
        'id': 53,
        'name': 'Thriller'
    },
    {
        'id': 10752,
        'name': 'Kriegsfilm'
    },
    {
        'id': 37,
        'name': 'Western'
    }
]

export const FilterPage = () => {
    const allMovies = useAppSelector(selectAllMovie)
    const filtersValue = useAppSelector(selectFilters)

    const dispatch = useAppDispatch()

    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page') ?? 1);

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

    const takeGenreHandler = (genreId: number) => {
        dispatch(toggleGenreAC({id: genreId}))
    }

    const resetFiltersHandler = () => {
        dispatch(resetFiltersAC())
    }

    const onChangePageHandler = (newPage: number) => {
        setSearchParams({page: String(newPage)});
    }

    useEffect(() => {
        const bundler = setTimeout(() => {
            dispatch(fetchAllMovieTC({
                sort_by: filtersValue.sortBy,
                'vote_average.gte': filtersValue.minRating,
                'vote_average.lte': filtersValue.maxRating,
                with_genres: filtersValue.genres.join(','),
                page
            }))
        }, 500)


        return () => clearTimeout(bundler)
    }, [filtersValue.minRating,
        filtersValue.maxRating,
        filtersValue.sortBy,
        filtersValue.genres,
        page, dispatch])

    return allMovies && filtersValue ? (
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
                        <FlexWrapper wrap={'wrap'} gap={'10px'}>
                            {genresValues.map(genre => {

                                const isGenreSelected = filtersValue.genres.includes(genre.id)

                                return <Button key={genre.id}
                                               onClick={() => takeGenreHandler(genre.id)}
                                               variant={'secondary'}
                                               className={clsx(
                                                   styles.genreBtn,
                                                   isGenreSelected && styles.genreBtnActive
                                               )}>
                                    {genre.name}
                                </Button>
                            })
                            }
                        </FlexWrapper>
                        <Button size={'sm'}
                                className={styles.resetBtn}
                                onClick={resetFiltersHandler}>Reset</Button>
                    </aside>
                    <section>
                        <FlexWrapper wrap={'wrap'} gap={'24px'}>
                            {allMovies?.results.map(movie => <MovieCard key={movie.id}
                                                                        movie={movie}
                                                                        maxWidth={170}
                                                                        height={260}/>)}
                        </FlexWrapper>
                        <Pagination count={allMovies.total_pages}
                                    onChange={onChangePageHandler}
                                    page={page}/>
                    </section>
                </FlexWrapper>
            </Container>
        </div>
    ) : <div>Loading...</div>;
};

