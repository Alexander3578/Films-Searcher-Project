import {Outlet} from 'react-router'
import {Header} from '@/features/header/Header';
import React from 'react';


export const Layout = () => {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}