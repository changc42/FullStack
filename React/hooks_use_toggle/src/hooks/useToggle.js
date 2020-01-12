import {useState} from 'react';
export default function useToggle(initialVal = false){
    const[state_, setState_] = useState(initialVal);
    const toggle = () =>{
        setState_(!state_);
    }
    return [state_,toggle];
}