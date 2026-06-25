import {createBrowserRouter, Outlet, redirect, RouteObject, RouterProvider,} from 'react-router'
import {Layout} from '../common/layout/Layout';
import {Error404} from '../common/error/Error404';
import {MainPage} from '../features/main/mainPage/ui/MainPage';
import {SearchPage} from '../features/main/searchPage/ui/SearchPage';
import {CategoryPage} from '../features/main/categoryPage/ui/CategoryPage';
import {MOVIE_CATEGORY} from '../common/constants';


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
        path: '/category',
        loader: () => {
            const saved = localStorage.getItem(MOVIE_CATEGORY);
            return redirect(`/category/${saved ?? 'popular'}`);
        }
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
], {basename: '/'})

export const Router = () => {
    return <RouterProvider router={router} />
}