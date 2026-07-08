import React from 'react';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Typography} from '@/components/typography';
import {useAppSelector} from '@/common/hooks';
import {selectFavorites} from '../model/favorites-slice';
import {MovieCard} from '@/components/movieCard';
import {Container} from '@/components/stylesComponents/container/Container';
import styles from './FavoritesPage.module.scss'

export const FavoritesPage = () => {

    const favoritesMovie = useAppSelector(selectFavorites)

    return (
        <section>
            <Container>
                <Typography className={styles.favoriteTitle}
                            variant={'h1'}>
                    Favorites Movies
                </Typography>
                <FlexWrapper wrap={'wrap'} gap={'24px'}>
                    {favoritesMovie.length ?
                        favoritesMovie.map(movie => <MovieCard key={movie.id}
                                                               movie={movie}/>) :
                        <Typography as={'p'}
                                    variant={'h2'}
                                    className={styles.favoritesCaption}>
                            Add movies to favorites to see them on this page.
                        </Typography>}
                </FlexWrapper>
            </Container>
        </section>
    );
};

