import {Outlet, useNavigate} from 'react-router'
import {Header} from '@/features/header/Header';
import React, {useEffect} from 'react';
import {Footer} from '../../features/footer/Footer';


export const Layout = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/main')
    }, [])

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