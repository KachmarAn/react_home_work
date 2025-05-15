import React, {useEffect, useState} from 'react';
import SmileList from './SmileList';
import '../styles.css';

const initialSmiles = [
    { id: 1, smile: '😀', votes: 0 },
    { id: 2, smile: '😂', votes: 0 },
    { id: 3, smile: '😍', votes: 0 },
    { id: 4, smile: '😎', votes: 0 },
];

const SmileApp = () => {
    const [smiles, setSmiles] = useState(() => {
        const stored = localStorage.getItem('votes');
        return stored ? JSON.parse(stored) : initialSmiles;
    });

    const [winner, setWinner] = useState(null);

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(smiles));
    }, [smiles]);

    const handleVote = (id) => {
        setSmiles((prev) =>
            prev.map((smile) =>
                smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
            )
        );
    };

    const showResult = () => {
        const top = smiles.reduce((max, s) => (s.votes > max.votes ? s : max), smiles[0]);
        setWinner(top);
    };

    const resetVotes = () => {
        setSmiles(initialSmiles);
        setWinner(null);
        localStorage.removeItem('votes');
    };

    return (
        <div>
            <h1>Голосування за смайлик!!!</h1>
            <SmileList smiles={smiles} onVote={handleVote} />
            <button className="action-button" onClick={showResult}>Показати результати</button>
            <button className="action-button" onClick={resetVotes}>Очистити результати</button>
            {winner && (
                <h2 className="result-text">
                    Переможець: {winner.smile} з {winner.votes} голосами
                </h2>
            )}
        </div>
    );
};

export default SmileApp;
