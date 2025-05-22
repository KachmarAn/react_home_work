import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { SmilesProvider } from './contexts/SmilesContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <ThemeProvider>
        <SmilesProvider>
            <App />
        </SmilesProvider>
    </ThemeProvider>
);