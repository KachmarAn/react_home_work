import React from 'react';
import SmileApp from '../../components/SmileApp';
import {useTheme} from '../../contexts/ThemeContext';

function Home() {
    const {theme} = useTheme();
    return (
        <div className={`page-content ${theme}`}>
            <SmileApp/>
        </div>
    );
}

export default Home;