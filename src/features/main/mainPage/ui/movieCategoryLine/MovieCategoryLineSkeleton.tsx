import React from 'react';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Skeleton} from '@mui/material';
import styles from './MovieCategoryLine.module.scss';


export const MovieCategoryLineSkeleton = () => {
    return (
        <div className={styles.movieLine}>
            <FlexWrapper
                justify={'space-between'}
                align={'center'}
                className={styles.titleViewAllLine}
            >
                <Skeleton
                    variant="text"
                    width={250}
                    height={50}
                />

                <Skeleton
                    variant="rounded"
                    width={120}
                    height={40}
                />
            </FlexWrapper>


            <FlexWrapper gap={'24px'}>
                {Array.from({length: 6}).map((_, index) => (
                    <div key={index}
                         style={{width: 210}}>

                        <Skeleton
                            variant="rounded"
                            width={210}
                            height={330}
                        />

                        <Skeleton
                            variant="text"
                            width={180}
                            height={35}
                            sx={{marginTop: '10px'}}
                        />

                    </div>
                ))}
            </FlexWrapper>
        </div>
    );
};