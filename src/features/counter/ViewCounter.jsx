import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const ViewCounter = () => {
    const count = useSelector((state) => state.counter.count);
    console.log(count);
    const dispatch = useDispatch();
    // const 
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                onClick={() => { dispatch(increment()) }}
            >Increment</button>
            <button
                onClick={() => { dispatch(decrement()) }}
            >Decrement</button>
            <button
                onClick={() => { dispatch(reset()) }}
            >Reset</button>
            <button
                onClick={() => { dispatch(incrementByAmount(5)) }}
            >Increment By 5</button>
        </div>
    );
};

export default ViewCounter;