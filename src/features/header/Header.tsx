import React from 'react';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {LinearProgress, Switch} from '@mui/material';
import {changeThemeModeAC, selectThemeMode} from '@/app/app-slice';
import logo from '@/assets/logo.svg'
import {Link} from 'react-router';
import {Container} from '@/components/stylesComponents/container/Container';
import {Menu} from './menu/Menu';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import styles from './Header.module.scss'
import {selectStatus} from '../../app/app-slice';
import {THEME_MODE} from '../../common/constants';

export const Header = () => {

    const dispatch = useAppDispatch()

    const themeMode = useAppSelector(selectThemeMode)
    const status = useAppSelector(selectStatus)

    const changeMode = () => {
        localStorage.setItem(THEME_MODE, themeMode === 'light' ? 'dark' : 'light')
        dispatch(changeThemeModeAC({theme: themeMode === 'light' ? 'dark' : 'light'}))
    }

    return (
        <header className={styles.header}>
            <Container>
                <FlexWrapper gap={'20px'} justify={'space-between'} align={'center'}>
                    <Link to={'/main'}>
                        <img src={logo} alt={'logo'} className={styles.logo}/>
                    </Link>
                    <Menu/>
                    <Switch checked={themeMode === 'dark'}
                            color={'default'}
                            onChange={changeMode}/>
                </FlexWrapper>
            </Container>
            {status === 'loading' && <LinearProgress
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999
                }}
            />}
        </header>
    );
};

