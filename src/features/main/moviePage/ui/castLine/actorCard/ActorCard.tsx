import React from 'react';
import styles from './ActorCard.module.scss'
import {CastType} from '../../../api/movieDetailsApi.types';
import {Typography} from '@/components/typography';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';

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
                 src={cast.profile_path ?
                     `https://image.tmdb.org/t/p/original${cast.profile_path}`
                     : `https://avatars.mds.yandex.net/i?id=6358a7315532f9c8f103c83d2a9a77c81b7a7c02-12593547-images-thumbs&n=13`}
                 style={{height}}
                 alt={`${cast.name} actor image`}/>
            <FlexWrapper direction={'column'} gap={'10px'} align={'center'}>
                <Typography variant={'h3'}
                            className={styles.actorName}>{cast.name ? cast.name : 'Actor name'}</Typography>
                <Typography variant={'body1'}
                            className={styles.characterName}>{cast.character ? cast.character : 'Character name'}</Typography>
            </FlexWrapper>
        </div>
    );
};




