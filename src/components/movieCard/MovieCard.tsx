import React from 'react';
import styles from './MovieCard.module.scss'
import {Typography} from '../typography';

type Props = {
    imgSrc: string
    title: string
    rating: number
}

export const MovieCard = ({rating, imgSrc, title}: Props) => {

    const hasImage = imgSrc && !imgSrc.endsWith('null');

    const ratingStyle =
        rating > 7
            ? {
                background: '#22c55e',
                color: '#fff',
            }
            : rating >= 4
                ? {
                    background: '#facc15',
                    color: '#000',
                }
                : {
                    background: '#ef4444',
                    color: '#fff',
                };

    return (
        <div>
            <div className={styles.movieImg} style={hasImage ? {
                backgroundImage: `url(${imgSrc})`
            } : {background: `#3d3c3c`}}>
                <div className={styles.rating} style={ratingStyle}>
                    {rating.toFixed()}
                </div>
            </div>
            <span>{title}</span>
        </div>
    );
};

