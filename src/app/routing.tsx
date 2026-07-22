import {createBrowserRouter, Outlet, redirect, RouteObject, RouterProvider,} from 'react-router'
import {Layout} from '../common/layout/Layout';
import {Error404} from '../common/error/Error404';
import {MainPage} from '../features/main/mainPage/ui/MainPage';
import {SearchPage} from '../features/main/searchPage/ui/SearchPage';
import {CategoryPage} from '../features/main/categoryPage/ui/CategoryPage';
import {MOVIE_CATEGORY} from '../common/constants';
import {FavoritesPage} from '../features/main/favoritesPage/ui/FavoritesPage';
import {FilterPage} from '../features/main/filterPage/ui/FilterPage';
import {MoviePage} from '../features/main/moviePage/ui/MoviePage';


const publicRoutes: RouteObject[] = [
    {
        element: <MainPage/>,
        path: '/main',
    },
    {
        element: <MoviePage/>,
        path: '/movie/:id',
    },
    {
        element: <CategoryPage/>,
        path: '/category/:type',
    },
    {
        path: '/category',
        loader: () => {
            const saved = localStorage.getItem(MOVIE_CATEGORY);

            if (!saved) {
                return redirect('/category/popular');
            }

            return redirect(`/category/${saved}`);
        }
    },
    {
        element: <FilterPage/>,
        path: '/filter',
    },
    {
        element: <SearchPage/>,
        path: '/search',
    },
    {
        element: <FavoritesPage/>,
        path: '/favorites',
    },
]

function PublicRoutes() {
    // const isSuccess  = true

    // return isSuccess ? <Navigate to={'/'} /> : <Outlet />
    return <Outlet/>
}

export const router = createBrowserRouter([
    {
        children: [
            {
                children: publicRoutes,
                element: <PublicRoutes/>,
            },
        ],
        element: <Layout/>,
        path: '/',
    },
    {
        element: <Error404/>,
        path: '*',
    },
], {basename: '/'})

export const Router = () => {
    return <RouterProvider router={router}/>
}