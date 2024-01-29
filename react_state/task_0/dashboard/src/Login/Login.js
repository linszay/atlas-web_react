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
            <button className={css(styles.button)}>OK</button>
            </div>
        </div>
    </React.Fragment>
    )
}

const styles = StyleSheet.create({
    AppBody: {
        paddingLeft: '30px',
        paddingTop: '5px',
        fontFamily: 'Galano Grotesque Alt, sans-serif',
        color: '#00003C',
        '@media (min-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '30px',
            paddingTop: '40px',
        }
      },
      
    info: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
    }
    },
    
    label: {
        marginRight: '10px',
        extend: 'info > label',
        '@media (max-width: 900px)': {
            marginRight: '10px',
            marginBottom: '10px',
            extend: 'info > label',
        }
    },
    
    input: {
        marginLeft: '10px',
        extend: 'info > label > input',
        '@media (max-width: 900px)': {
            marginLeft: '10px',
            extend: 'info > label > input',
        }
    },

    button: {
        '@media (max-width: 900px)': {
            width: '40px',
        }
    },
});

export default Login;
