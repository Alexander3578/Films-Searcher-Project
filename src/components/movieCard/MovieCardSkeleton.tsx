import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styles from './MovieCard.module.scss';

type Props = {
    maxWidth?: number
    height?: number
}

export const MovieCardSkeleton = ({
                                      maxWidth = 210,
                                      height = 330
                                  }: Props) => {
    return (
        <div
            className={styles.movieCard}
            style={{maxWidth}}
        >
            <div
                className={styles.movieImg}
                style={{height}}
            >
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                />

                {/* кнопка избранного */}
                <Skeleton
                    variant="circular"
                    width={35}
                    height={35}
                    className={styles.skeletonFavorite}
                />

                {/* рейтинг */}
                <Skeleton
                    variant="rounded"
                    width={40}
                    height={25}
                    className={styles.skeletonRating}
                />
            </div>

            {/* название фильма */}
            <Skeleton
                variant="text"
                width="80%"
                height={35}
                className={styles.skeletonTitle}
            />
        </div>
    );
};