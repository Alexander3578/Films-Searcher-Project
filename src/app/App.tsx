import {ThemeProvider} from '@mui/material/styles';
import {useAppSelector} from '../common/hooks';
import {selectThemeMode} from './app-slice';
import {getTheme} from '../common/theme/theme';
import {CssBaseline} from '@mui/material';
import {Router} from './routing';
import {useEffect, useMemo} from 'react';

export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = useMemo(
        () => getTheme(themeMode),
        [themeMode]
    );
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeMode)
    }, [themeMode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router/>
        </ThemeProvider>
    )
}

