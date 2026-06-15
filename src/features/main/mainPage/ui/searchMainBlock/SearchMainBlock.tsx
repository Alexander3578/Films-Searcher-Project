import React from 'react';
import {Typography} from '@/components/typography';
import styles from './SearchMainBlock.module.scss'
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {SearchMovieBlock} from '../../../searchPage/ui/searchMovieBlock/SearchMovieBlock';

type Props = {
    backdropURL: string
}

export const SearchMainBlock = ({backdropURL}: Props) => {

    return (
        <FlexWrapper direction={'column'}
                     justify={'center'}
                     align={'flex-start'}
                     gap={'15px'}
                     className={styles.content}>
            <Typography className={styles.contentTitle}
                        colorTheme={'light'}
                        colorBalance={100}>
                Welcome
            </Typography>
            <Typography className={styles.contentDescription}
                        colorTheme={'light'}
                        colorBalance={100}>
                Browse highlighted titles from TMDB
            </Typography>
            <SearchMovieBlock />
        </FlexWrapper>
    );
};

