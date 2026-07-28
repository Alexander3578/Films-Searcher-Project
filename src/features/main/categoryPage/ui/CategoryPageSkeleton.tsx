import React from 'react';
import {Skeleton} from '@mui/material';
import {Container} from '@/components/stylesComponents/container/Container';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {MovieCardSkeleton} from '@/components/movieCard/MovieCardSkeleton';
import styles from './CategoryPage.module.scss';


export const CategoryPageSkeleton = () => {
    return (
        <section className={styles.categorySection}>

            {/* Category buttons */}
            <FlexWrapper
                justify={'center'}
                gap={'30px'}
                className={styles.categoryButtonsWrapper}
            >
                {
                    Array.from({length: 4}).map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="rounded"
                            width={170}
                            height={40}
                        />
                    ))
                }
            </FlexWrapper>


            <Container>

                {/* Title */}
                <Skeleton
                    variant="text"
                    width={300}
                    height={60}
                    sx={{marginBottom: '20px'}}
                />


                {/* Movies */}
                <FlexWrapper
                    wrap={'wrap'}
                    gap={'24px'}
                >
                    {
                        Array.from({length: 12}).map((_, index) => (
                            <MovieCardSkeleton
                                key={index}
                                maxWidth={250}
                                height={370}
                            />
                        ))
                    }
                </FlexWrapper>

            </Container>


            {/* Pagination */}
            <FlexWrapper
                justify={'center'}
                gap={'10px'}
                style={{
                    marginTop: '30px'
                }}
            >
                {
                    Array.from({length: 5}).map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="rounded"
                            width={40}
                            height={40}
                        />
                    ))
                }
            </FlexWrapper>

        </section>
    );
};