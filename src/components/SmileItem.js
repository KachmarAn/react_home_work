import React from 'react';

const SmileItem = ({ smile, onVote }) => {
    return (
        <div className="smile-item">
            {smile.smile} – {smile.votes} голосів
            <button className="vote-button" onClick={() => onVote(smile.id)}>
                Голосувати
            </button>
        </div>
    );
};

export default SmileItem;
