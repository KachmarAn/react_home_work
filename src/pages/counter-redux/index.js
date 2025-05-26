import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    increment,
    decrement,
    incrementByAmount,
    reset,
} from "../../store/actions/counterActions";

export default function CounterRedux() {
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();
    const {counter} = useSelector(state => state);

    const handleAddCustomAmount = () => {
        if (!isNaN(+amount)) {
            dispatch(incrementByAmount(+amount));
        }

        setAmount('');
    }

    return (
        <div className="counter-page">
            <h1>Counter*: {counter}</h1>
            <button className="counter-btn" onClick={() => dispatch(increment())}>+1</button>
            <button className="counter-btn" onClick={() => dispatch(decrement())}>-1</button>
        </div>
    )
}