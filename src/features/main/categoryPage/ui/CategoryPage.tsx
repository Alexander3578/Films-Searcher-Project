import React from 'react';
import {useParams} from 'react-router';
import {MovieCategory} from '@/common/enums/enums';

export const CategoryPage = () => {

    const {type} = useParams()

    const category = type as MovieCategory

    return (
        <div>
            {category}
        </div>
    );
};

