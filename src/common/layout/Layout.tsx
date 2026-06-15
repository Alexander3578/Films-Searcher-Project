import {Outlet, useNavigate} from 'react-router'
import {Header} from '@/features/header/Header';
import React, {useEffect} from 'react';


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
        </>
    )
}