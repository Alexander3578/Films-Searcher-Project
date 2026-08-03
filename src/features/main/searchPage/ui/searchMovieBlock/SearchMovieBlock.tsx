import React, {useState} from 'react';
import {FlexWrapper} from '@/components/stylesComponents/flexWrapper/FlexWrapper';
import {Button} from '@/components/button';
import styles from './SearchMovieBlock.module.scss'
import {useNavigate} from 'react-router';
import {TextField} from '@/components/textField';
import {clearSearchResultAC} from '../../model/search-slice';
import {useAppDispatch} from '../../../../../common/hooks';

export const SearchMovieBlock = () => {

    const [query, setQuery] = useState<string | null>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSearchClickHandler = () => {
        if (!query) return;
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    const onClearQuery = () => {
        setQuery(null)
        navigate(`/search`)
        dispatch(clearSearchResultAC())
    }

    return (
        <FlexWrapper gap={'10px'} className={styles.block}>
            <TextField inputType={'search'}
                       onChange={(e) => setQuery(e.target.value)}
                       className={styles.searchInput}
                       placeholder={'Search for a movie'}
                       value={query ?? ""}
                       onClearBtn={onClearQuery}/>

            <Button
                className={styles.searchButton}
                size={'md'}
                onClick={onSearchClickHandler}
                disabled={!Boolean(query?.trim())}
                isImg
                buttonImg={'search'}
            >
                Search
            </Button>
        </FlexWrapper>
    )
}
