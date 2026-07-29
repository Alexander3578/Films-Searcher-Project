import React from 'react';
import { Skeleton } from '@mui/material';
import { FlexWrapper } from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import { MovieCardSkeleton } from '@/components/movieCard/MovieCardSkeleton';
import styles from './MovieCategoryLine.module.scss';

type Props = {
    titleWidth?: number;
    withButton?: boolean;
}

export const MovieCategoryLineSkeleton = ({
                                              titleWidth = 250,
                                              withButton = true,
                                          }: Props) => {
    return (
        <div className={styles.movieLine}>
            <FlexWrapper
                justify={'space-between'}
                align={'center'}
                className={styles.titleViewAllLine}
            >
                <Skeleton
                    variant="text"
                    width={titleWidth}
                    height={50}
                />

                {withButton && (
                    <Skeleton
                        variant="rounded"
                        width={120}
                        height={40}
                    />
                )}
            </FlexWrapper>

            <FlexWrapper
                gap={'24px'}
                align={'stretch'}
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <MovieCardSkeleton
                        key={index}
                    />
                ))}
            </FlexWrapper>
        </div>
    );
};