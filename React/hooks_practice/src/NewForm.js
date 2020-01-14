import React, {useState} from 'react';
import useInputState from './hooks/useInputState';

// export default function NewForm(){
//     const [email,setEmail] = useState("");
//     const handleChange = e =>{
//         setEmail(e.target.value);
//     }
//     return(
//         <div>
//             <h1>New form says: {email}</h1>
//             <input type="text" value={email} onChange={handleChange}/>
//         </div>
//     )
// }

export default function NewForm(){
    const [email, updateEmail, reset] = useInputState("");
    return(
        <div>
            <h1>New form says: {email}</h1>
            <input type="text" value={email} onChange={updateEmail}/>
            <button onClick={reset}>reset</button>
        </div>
    )
}