import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, provider } from './firebase';
import './login.css'


const Login = () => {

    const dispatch = useDispatch()
    const signIn =() => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl:user.photoURL
            }))
        }
        )
        .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
                <Button variant="contained" 
                onClick={signIn}
                color="primary"
                >
                LOGIN
                </Button>
            </div>
        </div>
    );
}

export default Login;
