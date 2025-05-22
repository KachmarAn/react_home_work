import React from 'react';
import Header from './components/Header';
import SmileApp from './components/SmileApp';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header/>
            <SmileApp/>
            <Footer/>
        </div>
    );
}

export default App;