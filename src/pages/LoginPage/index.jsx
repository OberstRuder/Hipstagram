import React, { useEffect, useState } from 'react';
import { IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { actionAuthLogin, actionFullLogin } from "../../redux/actions/actionsAuth";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { actionAboutMe } from "../../redux/actions/actionsMe";
import { actionFullGetAllPosts } from "../../redux/actions/actionsPost";
import { store } from "../../redux/store";
import './style.css';

const LoginPage = ({ onLogin, isLogged, promise, myId }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (promise && isLogged) {
            if (login && password) {
                isLogged = localStorage.authToken
                if (localStorage.authToken) {
                    store.dispatch(actionAboutMe())
                    store.dispatch(actionAuthLogin(localStorage.authToken))
                    store.dispatch(actionFullGetAllPosts())
                }
                navigate('/profile/' + myId);
                setErrorMessage('')
            } else {
                setErrorMessage('Login and password cannot be empty')
            }
        }
        if (promise) {
            if (promise.status === 'RESOLVED' && !promise.payload) {
                setErrorMessage('Please, enter correct login and password')
            }
        }
    }, [isLogged, navigate, promise])

    return (
        <div className='login-cont'>
            <div className='login-box'>
                <h3>Log in</h3>
                <TextField
                    variant="standard"
                    label="Username"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)} />
                <TextField
                    style={{ position: 'relative' }}
                    variant="standard"
                    label="Password"
                    type={showPass ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}>
                </TextField>
                <IconButton className='showBtn' style={{ marginLeft: 'auto' }}
                    aria-label="toggle password visibility"
                    onClick={() => setShowPass(!showPass)}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                <div>
                    {<p style={{ color: 'red', fontSize: '16px', position: 'relative', bottom: '30px' }}>{errorMessage}</p>}
                    <button
                        className='primeBtn'
                        onClick={() => onLogin(login, password)}>
                        <Link to={'/login'}>Log in</Link>
                    </button>
                    <p>Don't have an account? <br />
                        <button className='ordinaryBtn'>
                            <Link to='/registration'>Register</Link>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export const CLoginPage = connect(
    (state) => ({
        isLogged: state?.auth?.token,
        promise: state?.promise?.login,
        myId: state?.auth?.payload?.sub?.id
    }),
    { onLogin: actionFullLogin }
)(LoginPage);