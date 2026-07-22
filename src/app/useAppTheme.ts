import {useAppSelector} from '../common/hooks';
import {selectThemeMode} from './app-slice';
import {useEffect, useMemo} from 'react';
import {getTheme} from '../common/theme/theme';

export const useAppTheme = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = useMemo(
        () => getTheme(themeMode),
        [themeMode]
    );
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeMode)
    }, [themeMode])

    return {theme}
}