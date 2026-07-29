import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styles from './ActorCard.module.scss';

type Props = {
    maxWidth?: number
    height?: number
}

export const ActorCardSkeleton = ({
                                      maxWidth = 220,
                                      height = 220,
                                  }: Props) => {
    return (
        <div
            className={styles.actorCard}
            style={{ maxWidth }}
        >
            <Skeleton
                variant="circular"
                width="100%"
                height={height}
            />

            <Skeleton
                variant="text"
                width="80%"
                height={35}
                sx={{
                    mx: 'auto',
                    mt: 2,
                }}
            />

            <Skeleton
                variant="text"
                width="60%"
                height={28}
                sx={{ mx: 'auto' }}
            />
        </div>
    );
};