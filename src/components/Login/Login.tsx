import React from 'react';
import './Style.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



function Login() {
    return (
        <div className='main'>
            <div className='login-container'>
                <div className='login-text'>
                    <h1>Login</h1>
                </div>
                <div className='main-field'>
                    <div className='fields'>
                        <TextField id="standard-basic" label="Username" fullWidth />
                    </div>
                    <div className='fields'>
                        <TextField id="standard-basic" label="Password" fullWidth />
                    </div>
                    <div className='login-btn'>
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                    </div>
                </div>
                <div className='signUp'>
                    <p>Don't have an account? <Link to='signup'> Sign Up </Link> </p>
                </div>
            </div>
        </div>
    );
}

export default Login;