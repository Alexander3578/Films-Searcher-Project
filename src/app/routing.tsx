import {createBrowserRouter, Outlet, RouteObject, RouterProvider,} from 'react-router'
import {Layout} from '../common/layout/Layout';
import {Error404} from '../common/error/Error404';
import {MainPage} from '../features/main/movie/ui/mainPage';


const publicRoutes: RouteObject[] = [
    {
        element: <MainPage />,
        path: '/',
    },
    {
        element: <div>Category Movies</div>,
        path: '/category',
    },
    {
        element: <div>Filtered Movies</div>,
        path: '/filter',
    },
    {
        element: <div>Search</div>,
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