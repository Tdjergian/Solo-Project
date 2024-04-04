import React, { useState} from "react";
import { useNavigate } from "react-router";


export default function LoginBox (props) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = (e)=>{
        // console.log(e.target.id)
        if(e.target.id === 'usernameField'){
            setUsername(e.target.value);
        }else if(e.target.id === 'passwordField'){
            setPassword(e.target.value)
        }
    }

    function requestLogin(e) { 
        console.log(username, password  )
        fetch('/login', {
            method: 'POST', 
            body: JSON.stringify({username:username, password:password}),
            headers: {'Content-Type': 'application/json' }
        })
          .then(res =>{
            // console.log(res)
            navigate('/home')
          })
          .catch(err=>{console.log('error in login request', err)})
        setPassword('');
        setUsername('');
        
    }


    return (
        <>
            <div>
                Username
            <input placeholder="username" id="usernameField" onChange={handleChange} value={username} />
            </div>
            
            <div>
                Password
            <input placeholder="password" id="passwordField" onChange={handleChange} value={password}/>
            </div>

            <button onClick={requestLogin}>Login</button>

        </>
    )
}