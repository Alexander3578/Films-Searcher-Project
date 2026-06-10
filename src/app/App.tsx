import {ThemeProvider} from '@mui/material/styles';
import {useAppSelector} from '../common/hooks';
import {selectThemeMode} from './app-slice';
import {getTheme} from '../common/theme/theme';
import {CssBaseline} from '@mui/material';
import {Router} from './routing';

export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router/>
        </ThemeProvider>
    )
}

