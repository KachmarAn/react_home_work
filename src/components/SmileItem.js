import React from 'react';
import {useTheme} from '../contexts/ThemeContext';

const SmileItem = ({smile, onVote}) => {
    const {theme} = useTheme();

    return (
        <div className={`smile-item ${theme}`}>
            {smile.smile} – {smile.votes} голосів
            <button className={`vote-button ${theme}`} onClick={() => onVote(smile.id)}>
                Голосувати
            </button>
        </div>
    );
};

export default SmileItem;