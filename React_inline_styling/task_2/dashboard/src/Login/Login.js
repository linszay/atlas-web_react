// Login.js new component
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
    <React.Fragment>
        <div className={css(styles.AppBody)}>
            <div>
            <p>Login to access the full dashboard</p>
            </div>
            <div className={css(styles.info)}>
            <label className={css(styles.label)}>
                Email:
                <input className={css(styles.input)} type="email" name="email" />
            </label>
            <label className={css(styles.label)}>
                Password:
                <input className={css(styles.input)} type="password" name="password" />
            </label>
            <button>OK</button>
            </div>
        </div>
    </React.Fragment>
    )
}

const styles = StyleSheet.create({
    AppBody: {
        paddingLeft: '30px',
        paddingTop: '40px',
        fontFamily: 'Galano Grotesque Alt, sans-serif',
        color: '#00003C',
      },
      
    info: {
    display: 'flex',
    flexDirection: 'row',
    },
    
    label: {
        marginRight: '10px',
        extend: 'info > label',
    },
    
    input: {
        marginLeft: '10px',
        extend: 'info > label > input',
        },
});

export default Login;
