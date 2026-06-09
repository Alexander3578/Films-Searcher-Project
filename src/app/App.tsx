import {ThemeProvider} from '@mui/material/styles';
import {useAppSelector} from '../common/hooks';
import {selectThemeMode} from './app-slice';
import {getTheme} from '../common/theme/theme';
import {Header} from '../common/Header/Header';
import {CssBaseline} from '@mui/material';
import {BrowserRouter} from 'react-router';

export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div>
                    <CssBaseline/>
                    <Header/>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    )
}

