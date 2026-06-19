import React from 'react';
import {Typography} from '@/components/typography';
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Typography variant={'h2'}
                        colorTheme={'dark'}
                        colorBalance={100}>
                © 2025 Kinopoisk Demo · Данные предоставлены TMDB.
            </Typography>
        </footer>
    );
};
