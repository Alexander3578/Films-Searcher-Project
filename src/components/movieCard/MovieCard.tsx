import React from 'react';
import styles from './MovieCard.module.scss'
import {Typography} from '../typography';

type Props = {
    imgSrc: string
    title: string
    rating: number
}

export const MovieCard = ({rating, imgSrc, title}: Props) => {

    const imageUrl = imgSrc
        ? imgSrc
        : undefined;

    return (
        <div>
            <div className={styles.movieCard} style={imageUrl ? {
                backgroundImage: `url(${imageUrl})`
            } : {background: `#000`}}>
                <div>{rating}</div>
            </div>
            <Typography>{title}</Typography>
        </div>
    );
};

