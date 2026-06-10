import React from 'react';
import {Link} from 'react-router';
import {v4} from 'uuid';
import styles from './Menu.module.scss';
import {Typography} from '@/components/typography';

type HeaderMenu = {
    id: string
    title: string
    link: string
}

const headerMenu: HeaderMenu[] = [
    {id: v4(), title: 'Main', link: '/'},
    {id: v4(), title: 'Category Movies', link: '/category'},
    {id: v4(), title: 'Filtered Movies', link: '/filter'},
    {id: v4(), title: 'Search', link:'/search'},
    {id: v4(), title: 'Favorites', link: '/favorites'},
]

export const Menu = () => {
    return (
        <nav>
            <ul className={styles.list}>
                {headerMenu.map(item =>
                    <li key={item.id} className={styles.listItem}>
                        <Link to={`${item.link}`}>
                            <Typography colorTheme={'dark'}
                                        colorBalance={300}
                                        variant={'h2'}>{item.title}</Typography>
                        </Link>
                    </li>)}
            </ul>
        </nav>
    );
};

