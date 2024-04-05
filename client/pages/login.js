import React from 'react';
import LoginBox from '../components/loginBox';
import {  Button } from 'react-bootstrap';
import { useNavigate } from "react-router";

const LoginPage = props => {
    console.log('login page')

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/signup')
    }

    return (
        <>
            <LoginBox />
            <Button onClick={goToSignUp}> Create new account </Button>

        </>
    )
};

export default LoginPage;   
