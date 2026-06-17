import React from 'react';
import {MovieResults} from '../../api/movieApi.types';
import {useNavigate} from 'react-router';

type Props = {
    title: string
    movies: MovieResults[]
    category: string
}


export const MovieCategoryLine = ({title, movies, category}:Props) => {

    const navigate = useNavigate()
    return (
        <div>

        </div>
    );
};

