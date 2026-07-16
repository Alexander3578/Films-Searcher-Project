import React from 'react';
import styles from './ActorCard.module.scss'
import {CastType} from '../../../api/movieDetailsApi.types';
import {Typography} from '@/components/typography';
import {FlexWrapper} from '../../../../../../components/stylesComponents/flexWrapper/FlexWrapper';

type Props = {
    cast: CastType
    maxWidth?: number
    height?: number
}

export const ActorCard = ({cast, maxWidth = 220, height = 220}: Props) => {

    return (
        <div className={styles.actorCard}
             style={{maxWidth}}>
            <img className={styles.actorImg}
                 src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                 style={{height}}
                 alt={`${cast.name} actor image`}/>
            <FlexWrapper direction={'column'} gap={'10px'} align={'center'}>
                <Typography variant={'h3'} className={styles.actorName}>{cast.name}</Typography>
                <Typography variant={'body1'} className={styles.characterName}>{cast.character}</Typography>
            </FlexWrapper>
        </div>
    );
};




