import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import SignUpPage from "./pages/signUp";



const App = props => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element= {<LoginPage />} />
                <Route path="home" element = {<HomePage />} />
                <Route path='signup' element = {<SignUpPage />} />
                <Route path = '*' element = {<div> This is the 404 error message </div>}/>
            </Routes>
        </BrowserRouter>
    
    )
};
console.log('the app is running')

export default App;
