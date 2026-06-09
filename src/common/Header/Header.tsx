import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {Switch} from '@mui/material';
import {selectThemeMode} from '@/app/app-slice';
import {changeThemeModeAC} from '../../app/app-slice';
import logo from '@/assets/logo.svg'
import {Link} from 'react-router';
import {Container} from '../styles/container/Container';
import {Menu} from './menu/Menu';
import {FlexWrapper} from '../styles/flexWrapper/FlexWrapper';
import styles from './Header.module.scss'

export const Header = () => {

    const dispatch = useAppDispatch()

    const themeMode = useAppSelector(selectThemeMode)

    const changeMode = () => {
        dispatch(changeThemeModeAC({theme: themeMode === 'light' ? 'dark' : 'light'}))
    }

    return (
        <header className={styles.header}>
            <Container>
                <FlexWrapper gap={'20px'}  justify={'space-between'}>
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'} className={styles.logo}/>
                    </Link>
                    <Menu/>
                    <Switch color={'default'} onChange={changeMode}/>
                </FlexWrapper>
            </Container>
        </header>
    );
};

