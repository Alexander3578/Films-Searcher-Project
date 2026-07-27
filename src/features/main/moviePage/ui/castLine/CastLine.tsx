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
                    {credits.length ? credits.slice(0, 6).map(credit => <ActorCard key={credit.id}
                                                                  cast={credit} />) :
                        <Typography className={styles.noInformation}
                                    as={'p'}
                                    variant={'h2'}>
                            No cast information available.
                        </Typography>}
                </FlexWrapper>
            </div>
        </div>
    );
};

