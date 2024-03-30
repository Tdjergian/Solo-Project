import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
  

const HomePage = props => {
    const [ words, setWords ] = useState('');
    let navigate = useNavigate();

    useEffect(()=>{
        fetch('/api/')
    .then(res => res.json())
    .then(res => setWords(res))
    }, []);
  
    function reRoute () { 
        navigate('/');
     }
    

    return (
        <div>
            {words}
            <button onClick={reRoute}>
                back
            </button>
        
        </div>
    )
};

export default HomePage; 