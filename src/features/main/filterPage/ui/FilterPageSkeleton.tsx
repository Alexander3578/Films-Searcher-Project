import React from 'react';
import {Skeleton} from '@mui/material';
import {Container} from '@/components/stylesComponents/container/Container';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import styles from './FilterPage.module.scss';
import {MovieCardSkeleton} from '@/components/movieCard/MovieCardSkeleton';


export const FilterPageSkeleton = () => {
    return (
        <div className={styles.filterPage}>
            <Container>

                <FlexWrapper gap={'20px'}>

                    {/* Filters */}
                    <aside className={styles.filterAsideBlock}>

                        <Skeleton
                            variant="text"
                            width={180}
                            height={45}
                        />


                        {/* Select */}
                        <FlexWrapper gap={'15px'}>
                            <Skeleton
                                variant="text"
                                width={80}
                                height={30}
                            />

                            <Skeleton
                                variant="rounded"
                                width={160}
                                height={40}
                            />
                        </FlexWrapper>


                        {/* Slider */}
                        <div>
                            <Skeleton
                                variant="text"
                                width={100}
                                height={30}
                            />

                            <Skeleton
                                variant="rounded"
                                width={220}
                                height={40}
                            />
                        </div>


                        {/* Genres */}
                        <FlexWrapper
                            wrap={'wrap'}
                            gap={'10px'}
                        >
                            {
                                Array.from({length: 12}).map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        variant="rounded"
                                        width={80}
                                        height={35}
                                    />
                                ))
                            }
                        </FlexWrapper>


                        <Skeleton
                            variant="rounded"
                            width={100}
                            height={35}
                        />

                    </aside>


                    {/* Movies */}
                    <section className={styles.moviesSection}>

                        <FlexWrapper
                            wrap={'wrap'}
                            gap={'24px'}
                        >
                            {
                                Array.from({length: 15}).map((_, index) =>
                                    <MovieCardSkeleton
                                        key={index}
                                        maxWidth={170}
                                        height={260}
                                    />
                                )
                            }
                        </FlexWrapper>


                        {/* Pagination */}
                        <FlexWrapper
                            justify={'center'}
                            gap={'10px'}
                        >
                            {
                                Array.from({length: 5}).map((_, index) =>
                                    <Skeleton
                                        key={index}
                                        variant="rounded"
                                        width={40}
                                        height={40}
                                    />
                                )
                            }
                        </FlexWrapper>

                    </section>

                </FlexWrapper>

            </Container>
        </div>
    );
};