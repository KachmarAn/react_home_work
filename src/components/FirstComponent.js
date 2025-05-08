import React from 'react';

class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <div>
                    <h1>First Component</h1>
                    <div>
                        {this.state.count}
                    </div>
                </div>
                <div>
                    <h1>First Component</h1>
                    <div>
                        {this.state.count}
                    </div>
                </div>
                <button onClick={this.increment}>Increment</button>
            </>

        );
    }
}

export default FirstComponent;