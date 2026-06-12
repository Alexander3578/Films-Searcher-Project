import React from 'react';
import {Typography} from '@/components/typography';
import styles from './SearchMovieBlock.module.scss'
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Button} from '@/components/button';

type Props = {
    backdropURL: string
}

export const SearchMovieBlock = ({backdropURL}: Props) => {
    return (
        <div className={styles.hero}
             style={{
                 backgroundImage: `url(${backdropURL})`,
             }}>
            <div className={styles.overlay}/>
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
                <FlexWrapper gap={'10px'}>
                    <input className={styles.contentInput}
                               placeholder={'Search for a movie'}/>
                    <Button className={styles.contentSearchBtn} size={'md'}>Search</Button>
                </FlexWrapper>

            </FlexWrapper>
        </div>
    );
};

