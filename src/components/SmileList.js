import React from 'react';
import SmileItem from './SmileItem';

const SmileList = ({smiles, onVote}) => {
    return (
        <div className="smile-list">
            {smiles.map((smile) => (
                <SmileItem key={smile.id} smile={smile} onVote={onVote}/>
            ))}
        </div>
    );
};

export default SmileList;