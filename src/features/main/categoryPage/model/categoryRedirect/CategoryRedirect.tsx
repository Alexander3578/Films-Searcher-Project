import {Navigate} from 'react-router';
import {MovieCategory} from '@/common/enums/enums';
import {MOVIE_CATEGORY} from '@/common/constants';

export const CategoryRedirect = () => {
    const saved =
        (localStorage.getItem(MOVIE_CATEGORY) as MovieCategory | null)
        ?? MovieCategory.POPULAR;

    return <Navigate to={`/category/${saved}`} replace />;
};