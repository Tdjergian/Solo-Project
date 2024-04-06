import React from 'react';
import LoginBox from '../components/loginBox';
import {  Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { motion } from 'framer-motion';

const LoginPage = props => {
    console.log('login page')

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/signup')
    }

    const MotionButton = motion(Button);
    return (
        <>
            <LoginBox />
            <MotionButton  onClick={goToSignUp}> Create new account </MotionButton>

        </>
    )
};

export default LoginPage;   
