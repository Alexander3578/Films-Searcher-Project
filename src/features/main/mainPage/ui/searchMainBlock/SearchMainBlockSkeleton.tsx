import React from 'react';
import {Skeleton} from '@mui/material';
import {Container} from '@/components/stylesComponents/container/Container';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import styles from './SearchMainBlock.module.scss';


export const SearchMainBlockSkeleton = () => {
    return (
        <Container>
            <FlexWrapper
                direction={'column'}
                justify={'center'}
                align={'flex-start'}
                gap={'15px'}
                className={styles.content}
            >
                <Skeleton
                    variant="text"
                    width={180}
                    height={60}
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)'
                    }}
                />

                <Skeleton
                    variant="text"
                    width={320}
                    height={35}
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)'
                    }}
                />

                <Skeleton
                    variant="rounded"
                    width={500}
                    height={50}
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.15)'
                    }}
                />
            </FlexWrapper>
        </Container>
    );
};