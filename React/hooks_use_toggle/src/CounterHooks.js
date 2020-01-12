import React,{useState} from 'react';

export default function CounterHooks(){
    const [count, setCount]= useState(0);
    return(
        <div>
            <h1>the count is: {count}</h1>
            <button onClick={()=>setCount(count+1)}>add 1</button>
        </div>
    )
    
}

