import React, {useState} from 'react';
import useToggle from './hooks/useToggle';

export default function Toggler(){
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isTall, toggleIsTall] = useToggle(true);

    return(
        <div>
            <h1 onClick={toggleIsTall}>{isTall? "tall":"short"}</h1>
            <h1 onClick={toggleIsHappy}>{isHappy? "happy":"sad"}</h1>
        </div>
    )
}

const [isHappy, toggleIsHappy] = useToggle(true);

export default function useToggle(initialVal){
    const[state_, setState_] = useState(initialVal);
    const toggle = () =>{
        setState_(!state_);
    }
    return [state_,toggle];
}