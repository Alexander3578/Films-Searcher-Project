import React from 'react';
import {Container} from '@/components/stylesComponents/container/Container';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {MovieCategoryLineSkeleton} from './movieCategoryLine/MovieCategoryLineSkeleton';
import {SearchMainBlockSkeleton} from './searchMainBlock/SearchMainBlockSkeleton';
import styles from './MainPage.module.scss';


export const MainPageSkeleton = () => {

    return (
        <section>

            <div className={styles.hero}>
                <div className={styles.overlay}/>

                <SearchMainBlockSkeleton/>

            </div>


            <Container>
                <FlexWrapper
                    direction={'column'}
                    justify={'space-between'}
                    align={'center'}
                    gap={'30px'}
                >

                    <MovieCategoryLineSkeleton/>

                    <MovieCategoryLineSkeleton/>

                    <MovieCategoryLineSkeleton/>

                    <MovieCategoryLineSkeleton/>

                </FlexWrapper>
            </Container>
        </section>
    );
};