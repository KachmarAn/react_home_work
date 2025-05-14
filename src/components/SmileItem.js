import React, {Component} from 'react';

class SmileItem extends Component {
    handleClick = () => {
        this.props.onVote(this.props.smile.id);
    };

    render() {
        const {smile, votes} = this.props.smile;
        return (
            <div className="smile-item">
                {smile} – {votes} голосів
                <button className="vote-button" onClick={this.handleClick}>
                    Голосувати
                </button>
            </div>
        );
    }
}

export default SmileItem;
