import {createBrowserRouter, Outlet, RouteObject, RouterProvider,} from 'react-router'
import {Layout} from '../common/layout/Layout';
import {Error404} from '../common/error/Error404';
import {MainPage} from '../features/main/mainPage/ui/MainPage';
import {SearchPage} from '../features/main/searchPage/ui/SearchPage';
import {CategoryPage} from '../features/main/categoryPage/ui/CategoryPage';


const publicRoutes: RouteObject[] = [
    {
        element: <MainPage />,
        path: '/main',
    },
    {
        element: <CategoryPage />,
        path: '/category/:type',
    },
    {
        element: <div>Filtered Movies</div>,
        path: '/filter',
    },
    {
        element: <SearchPage />,
        path: '/search',
    },
    {
        element: <div>Favorites</div>,
        path: '/favorites',
    },
]

function PublicRoutes() {
    // const isSuccess  = true

    // return isSuccess ? <Navigate to={'/'} /> : <Outlet />
    return <Outlet />
}

export const router = createBrowserRouter([
    {
        children: [
            {
                children: publicRoutes,
                element: <PublicRoutes />,
            },
        ],
        element: <Layout />,
        path: '/',
    },
    {
        element: <Error404 />,
        path: '*',
    },
])

export const Router = () => {
    return <RouterProvider router={router} />
}