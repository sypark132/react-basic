import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
/* state = {
    count: 0
    }
*/
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncremet = useCallback(() => {
        setCount(count + 1);
    })

    //useEffect: 마운트되었을 때, 업데이트 되었을 때 실행하는 리액트 훅
    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    })

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncremet}>
                <i className="fas fa-plus square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;