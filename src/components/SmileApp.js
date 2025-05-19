import React from 'react';
import SmileList from './SmileList';
import {useSmiles} from '../contexts/SmilesContext';
import {useTheme} from '../contexts/ThemeContext';
import '../styles.css';

const SmileApp = () => {
    const {smiles, handleVote, winner, showResult, resetVotes} = useSmiles();
    const {theme} = useTheme();

    return (
        <div className={`smile-app ${theme}`}>
            <SmileList smiles={smiles} onVote={handleVote}/>
            <div className="actions">
                <button className={`action-button ${theme}`} onClick={showResult}>Показати результати</button>
                <button className={`action-button ${theme}`} onClick={resetVotes}>Очистити результати</button>
            </div>
            {winner && (
                <h2 className={`result-text ${theme}`}>
                    Переможець: {winner.smile} з {winner.votes} голосами
                </h2>
            )}
        </div>
    );
};

export default SmileApp;