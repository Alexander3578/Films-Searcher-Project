import React from 'react';
import {MovieResults} from '../../api/movieApi.types';
import {useNavigate} from 'react-router';
import {Typography} from '@/components/typography';
import {Button} from '@/components/button';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {MovieCard} from '@/components/movieCard';
import {MovieCategory} from '@/common/enums/enums';
import styles from './MovieCategoryLine.module.scss'

type Props = {
    title: string
    movies: MovieResults[]
    category: MovieCategory
}


export const MovieCategoryLine = ({title, movies, category}: Props) => {

    const navigate = useNavigate()

    const viewAllMovieHandler = () => {
        navigate(`/category/${category}`)
    }

    return (
        <div>
            <FlexWrapper justify={'space-between'} align={'center'} className={styles.titleViewAllLine}>
                <Typography className={styles.categoryTitle}
                            variant={'h1'}>
                    {title}
                </Typography>
                <Button variant={'secondary'}
                        size={'md'}
                        onClick={viewAllMovieHandler}>
                    View more
                </Button>
            </FlexWrapper>
            <div>
                <FlexWrapper gap={'20px'}>
                    {movies.slice(0, 6).map(movie => <MovieCard key={movie.id}
                                                                imgSrc={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                                                title={movie.title}
                                                                rating={movie.vote_average}/>)}
                </FlexWrapper>
            </div>
        </div>
    );
};

