import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {Router} from './routing';
import {useAppTheme} from './useAppTheme';
import {ErrorSnackbar} from '../components/errorSnackbar/ErrorSnackbar';

export const App = () => {

    const {theme} = useAppTheme()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router/>
            <ErrorSnackbar />
        </ThemeProvider>
    )
}

