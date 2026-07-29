import React from 'react';
import {Container} from '@/components/stylesComponents/container/Container';
import {MovieInfoSkeleton} from './MovieInfoSkeleton';
import {CastLineSkeleton} from './castLine/CastLineSkeleton';
import {MovieCategoryLineSkeleton} from '../../mainPage/ui/movieCategoryLine/MovieCategoryLineSkeleton';
import styles from './MoviePage.module.scss';

export const MoviePageSkeleton = () => {
    return (
        <section className={styles.movieDetails}>
            <Container>

                <MovieInfoSkeleton />

                <CastLineSkeleton />

                <MovieCategoryLineSkeleton
                    withButton={false}
                />

            </Container>
        </section>
    );
};