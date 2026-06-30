import {MovieResults} from '@/features/main/mainPage/api/movieApi.types';
import {useAppDispatch} from './useAppDispatch';
import {selectIsFavorite, toggleFavorite} from '@/features/main/favoritesPage/model/favorites-slice';
import {useAppSelector} from './useAppSelector';

export const useFavoriteMovie = (movie: MovieResults) => {
    const dispatch = useAppDispatch()

    const isFavorite = useAppSelector(selectIsFavorite(movie.id))

    const toggle = () => {
        dispatch(toggleFavorite({ movie }))
    }

    return { isFavorite, toggle }
}