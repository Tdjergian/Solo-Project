import React, { useState} from "react";
import { useNavigate } from "react-router";


export default function SignUpBox (props) {
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

    function requestNewUser(e) { 
        console.log(username, password  )
        fetch('/newuser', {
            method: 'POST', 
            body: JSON.stringify({username:username, password:password}),
            headers: {'Content-Type': 'application/json' }
        })
          .then(res =>{
            // console.log(res)
            navigate('/home')
          })
          .catch(err=>{console.log(err)})
        setPassword('');
        setUsername('');
        
    }


    return (
        <>
            Please provide a username and password to create an accrount

            <div>
                Username
            <input placeholder="username" id="usernameField" onChange={handleChange} value={username} />
            </div>
            
            <div>
                Password
            <input placeholder="password" id="passwordField" onChange={handleChange} value={password}/>
            </div>

            <button onClick={requestNewUser}>Create New User</button>

        </>
    )
}