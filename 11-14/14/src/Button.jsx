import { useState } from 'react';

export default function Button() {
    const [ count, setCount ] =useState(0);

    function incrementCount(){
        setCount(count + 1);
    }

    return (
        <button onClick={incrementCount}> cluck me </button>
    );
}