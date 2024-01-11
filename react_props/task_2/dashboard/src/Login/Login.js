// Login.js new component
import React from 'react';
import './Login'

const Login = () => {
    return (
    <React.Fragment>
        <div className="App-body">
            <div>
            <p>Login to access the full dashboard</p>
            </div>
            <div className='info'>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <button>OK</button>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Login;
