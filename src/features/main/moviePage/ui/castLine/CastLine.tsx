import React from 'react';
import {Typography} from '@/components/typography';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import styles from './CastLine.module.scss'
import {CastType} from '../../api/movieDetailsApi.types';
import {ActorCard} from './actorCard/ActorCard';

type Props = {
    credits: CastType[]
}


export const CastLine = ({credits}: Props) => {

    return (
        <div className={styles.castLine}>
            <Typography className={styles.castTitle}
                        variant={'h1'}>
                Cast
            </Typography>
            <div>
                <FlexWrapper gap={'24px'}>
                    {credits.slice(0, 6).map(credit => <ActorCard key={credit.id}
                                                                  cast={credit} />)}
                </FlexWrapper>
            </div>
        </div>
    );
};

