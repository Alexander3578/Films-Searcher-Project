import {Outlet, useLocation} from 'react-router'
import {Header} from '@/features/header/Header';
import React, {useEffect} from 'react';
import {Footer} from '@/features/footer/Footer';


export const Layout = () => {

    const location = useLocation()

    useEffect(() => {
        const routesToSave = [
            '/main',
            '/search',
            '/favorites',
            '/filter',
            '/category',
        ]

        if (
            routesToSave.some(route =>
                location.pathname.startsWith(route)
            )
        ) {
            localStorage.setItem(
                'LAST_ROUTE',
                location.pathname + location.search
            )
        }
    }, [location.pathname, location.search])
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}