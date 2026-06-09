import React from 'react';
import {Link} from 'react-router';
import {v4} from 'uuid';
import styles from './Menu.module.scss';

type HeaderMenu = {
    id: string
    title: string
}

const headerMenu: HeaderMenu[] = [
    {id: v4(), title: 'Main'},
    {id: v4(), title: 'Category Movies'},
    {id: v4(), title: 'Filtered Movies'},
    {id: v4(), title: 'Search'},
    {id: v4(), title: 'Favorites'},
]

export const Menu = () => {
    return (
        <nav>
            <ul className={styles.list}>
                {headerMenu.map(item =>
                    <li key={item.id} className={styles.listItem}>
                        <Link to={`/${item.title}`}>{item.title}</Link>
                    </li>)}
            </ul>
        </nav>
    );
};

