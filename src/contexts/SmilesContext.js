import React, {createContext, useState, useContext, useEffect} from 'react';

const SmilesContext = createContext();

export const useSmiles = () => useContext(SmilesContext);

const initialSmiles = [
    {id: 1, smile: '😀', votes: 0},
    {id: 2, smile: '😂', votes: 0},
    {id: 3, smile: '😍', votes: 0},
    {id: 4, smile: '😎', votes: 0},
];

export const SmilesProvider = ({children}) => {
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
                smile.id === id ? {...smile, votes: smile.votes + 1} : smile
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
        <SmilesContext.Provider value={{smiles, handleVote, winner, showResult, resetVotes}}>
            {children}
        </SmilesContext.Provider>
    );
};