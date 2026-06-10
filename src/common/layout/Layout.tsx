import {Outlet} from 'react-router'
import {Header} from '@/features/header/Header';
import {Container} from '@/components/stylesComponents/container/Container';


export const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </>
    )
}