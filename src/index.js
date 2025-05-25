import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
import {ThemeProvider} from './contexts/ThemeContext';
import {SmilesProvider} from './contexts/SmilesContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <SmilesProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </SmilesProvider>
        </ThemeProvider>
    </React.StrictMode>
);