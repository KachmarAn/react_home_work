import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div className="counter">
            <h2>Redux Counter</h2>
            <div className="counter-display">
                <span className="count-value">{count}</span>
            </div>
            <div className="counter-controls">
                <button onClick={handleDecrement} className="counter-btn decrement">
                    -
                </button>
                <button onClick={handleIncrement} className="counter-btn increment">
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;