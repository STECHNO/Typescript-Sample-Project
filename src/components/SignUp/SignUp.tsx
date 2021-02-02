import React, { useState } from 'react';
import './Style.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function SignUp() {
    let [checked, setChecked] = useState(false);
    let [toggle, setToggle] = useState(true);
    return (
        <div className='main'>
            <div className='login-container'>
                <div className='login-text'>
                    <h1>Sign Up</h1>
                </div>
                <div className='main-field'>
                    <div className='fields'>
                        <TextField id="standard-basic" label="Your Name" fullWidth />
                    </div>
                    <div className='fields'>
                        <TextField id="standard-basic" label="Your Email" fullWidth />
                    </div>
                    <div className='fields'>
                        <TextField id="standard-basic" label="Password" fullWidth />
                    </div>
                    <div className='fields'>
                        <TextField id="standard-basic" label="Repeat Your Password" fullWidth />
                    </div>
                    <div className='checkBox'>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary"/>}
                            label={<span style={{ fontSize: '13px' }}>I agree all statement in Terms of Service</span>}
                            labelPlacement="end"
                            checked={checked}
                            onChange={() => {
                                setChecked(!checked)
                                setToggle(!toggle)
                                console.log(checked)
                            }}
                        />
                    </div>
                    <div className='login-btn'>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={toggle}
                            >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;