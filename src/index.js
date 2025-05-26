import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {ThemeProvider} from './contexts/ThemeContext';
import {SmilesProvider} from './contexts/SmilesContext';
import store from './store';
import { Provider } from 'react-redux';

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