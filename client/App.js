import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";



const App = props => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element= {<LoginPage />} />
                <Route path="home/:username" element = {<HomePage />} />
            </Routes>
        </BrowserRouter>
    
    )
};
console.log('the app is running')

export default App;
