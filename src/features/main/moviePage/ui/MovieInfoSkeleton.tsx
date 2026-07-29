import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import styles from './MoviePage.module.scss';

export const MovieInfoSkeleton = () => {
    return (
        <div className={styles.movieInfoWrapper}>

            <FlexWrapper gap="40px">

                <Skeleton
                    variant="rounded"
                    width={330}
                    height={450}
                />

                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                    }}
                >

                    <Skeleton
                        variant="text"
                        width="65%"
                        height={60}
                    />

                    <Skeleton
                        variant="text"
                        width="45%"
                        height={35}
                    />

                    <Skeleton
                        variant="text"
                        width="100%"
                        height={30}
                    />

                    <Skeleton
                        variant="text"
                        width="95%"
                        height={30}
                    />

                    <Skeleton
                        variant="text"
                        width="90%"
                        height={30}
                    />

                    <Skeleton
                        variant="text"
                        width="80%"
                        height={30}
                    />

                    <Skeleton
                        variant="text"
                        width={120}
                        height={35}
                    />

                    <FlexWrapper wrap="wrap" gap="10px">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                variant="rounded"
                                width={90}
                                height={35}
                            />
                        ))}
                    </FlexWrapper>

                </div>

            </FlexWrapper>

        </div>
    );
};