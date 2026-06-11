import {Outlet} from 'react-router'
import {Header} from '@/features/header/Header';
import {Container} from '@/components/stylesComponents/container/Container';
import {LinearProgress} from '@mui/material';
import React from 'react';
import {useAppSelector} from '../hooks';
import {selectStatus} from '@/app/app-slice';


export const Layout = () => {

    const status = useAppSelector(selectStatus)

    return (
        <>
            <Header/>
            {status === 'loading' && <LinearProgress
                sx={{
                    position: 'fixed',
                    top: 174,
                    left: 0,
                    right: 0,
                    zIndex: 9999
                }}
            />}
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </>
    )
}