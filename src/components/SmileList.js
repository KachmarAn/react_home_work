import React, {Component} from 'react';
import SmileItem from './SmileItem';

class SmileList extends Component {
    render() {
        const {smiles, onVote} = this.props;
        return (
            <div>
                {smiles.map((smile) => (
                    <SmileItem key={smile.id} smile={smile} onVote={onVote}/>
                ))}
            </div>
        );
    }
}

export default SmileList;
