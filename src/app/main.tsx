import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '../styles/index.scss'
import {Provider} from 'react-redux';
import {store} from './store';
import {App} from './App';
import 'virtual:svg-icons-register'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
