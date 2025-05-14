import React, {Component} from 'react';
import SmileList from './SmileList';
import '../styles.css';

class Smile extends Component {
    constructor(props) {
        super(props);
        const savedVotes = JSON.parse(localStorage.getItem('votes')) || [];

        this.state = {
            smiles: savedVotes.length > 0 ? savedVotes : [
                {id: 1, smile: "😀", votes: 0},
                {id: 2, smile: "😂", votes: 0},
                {id: 3, smile: "😍", votes: 0},
                {id: 4, smile: "😎", votes: 0},
            ],
            winner: null
        };
    }

    handleVote = (id) => {
        const updatedSmiles = this.state.smiles.map((smile) =>
            smile.id === id ? {...smile, votes: smile.votes + 1} : smile
        );

        this.setState({smiles: updatedSmiles}, () => {
            localStorage.setItem('votes', JSON.stringify(this.state.smiles));
        });
    };

    showResult = () => {
        const winner = this.state.smiles.reduce((max, smile) =>
            smile.votes > max.votes ? smile : max
        );
        this.setState({winner});
    };

    resetVotes = () => {
        const resetSmiles = this.state.smiles.map((smile) => ({
            ...smile,
            votes: 0
        }));
        this.setState({smiles: resetSmiles, winner: null}, () => {
            localStorage.removeItem('votes');
        });
    };

    render() {
        return (
            <div>
                <h1>Голосування за смайлик!!!</h1>
                <SmileList smiles={this.state.smiles} onVote={this.handleVote}/>
                <button className="action-button" onClick={this.showResult}>
                    Показати результати
                </button>
                <button className="action-button" onClick={this.resetVotes}>
                    Очистити результати
                </button>

                {this.state.winner && (
                    <h2 className="result-text">
                        Переможець: {this.state.winner.smile} з {this.state.winner.votes} голосами
                    </h2>
                )}
            </div>
        );
    }
}

export default Smile;
