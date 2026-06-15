import React, {useState} from 'react';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Button} from '@/components/button';
import styles from './SearchMovieBlock.module.scss'
import {useNavigate} from 'react-router';

export const SearchMovieBlock = () => {

    const [query, setQuery] = useState<string>('');
    const navigate = useNavigate();

    const onSearchClickHandler = () => {
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    return (
        <FlexWrapper gap={'10px'}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
                placeholder={'Search for a movie'}
            />

            <Button
                size={'md'}
                onClick={onSearchClickHandler}
                disabled={!Boolean(query.trim())}
            >
                Search
            </Button>
        </FlexWrapper>
    )
}
