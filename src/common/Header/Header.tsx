import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {Switch} from '@mui/material';
import {selectThemeMode} from '@/app/app-slice';
import {changeThemeModeAC} from '../../app/app-slice';
import logo from '@/assets/logo.svg'
import {Link} from 'react-router';
import {v4} from 'uuid'


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


export const Header = () => {

    const dispatch = useAppDispatch()

    const themeMode = useAppSelector(selectThemeMode)

    const changeMode = () => {
        dispatch(changeThemeModeAC({theme: themeMode === 'light' ? 'dark' : 'light'}))
    }

    return (
        <div>
            <Link to={'/'}>
                <img src={logo} alt={'logo'}/>
            </Link>
            <nav>
                <ul>
                    {headerMenu.map(item =>
                        <li key={item.id}>
                            <Link to={`/${item.title}`}>{item.title}</Link>
                        </li>)}
                </ul>
            </nav>
            <Switch color={'default'} onChange={changeMode}/>
        </div>
    );
};

