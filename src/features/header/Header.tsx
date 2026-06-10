import React from 'react';
import {useAppDispatch, useAppSelector} from '@/common/hooks';
import {Switch} from '@mui/material';
import {selectThemeMode} from '@/app/app-slice';
import {changeThemeModeAC} from '@/app/app-slice';
import logo from '@/assets/logo.svg'
import {Link} from 'react-router';
import {Container} from '@/components/stylesComponents/container/Container';
import {Menu} from './menu/Menu';
import {FlexWrapper} from '../../components/stylesComponents/flexWrapper/FlexWrapper';
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
                <FlexWrapper gap={'20px'}  justify={'space-between'} align={'center'}>
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

