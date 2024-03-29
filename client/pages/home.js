import React, { useEffect } from 'react';
  

const HomePage = props => {

    useEffect(()=>{
        fetch('/api/')
    .then(res => res.json())
    .then(res => console.log(res))
    }, []);
  
    

    return (
        <div>
        This is the Home page
        </div>
    )
};

export default HomePage; 