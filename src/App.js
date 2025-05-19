import React from 'react';
import Header from './components/Header';
import SmileApp from './components/SmileApp';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { SmilesProvider } from './contexts/SmilesContext';

function App() {
    return (
        <ThemeProvider>
            <SmilesProvider>
                <div className="app">
                    <Header />
                    <SmileApp />
                    <Footer />
                </div>
            </SmilesProvider>
        </ThemeProvider>
    );
}

export default App;