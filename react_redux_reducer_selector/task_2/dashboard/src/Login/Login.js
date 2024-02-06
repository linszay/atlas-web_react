// Login.js new component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        enableSubmit: false,
      };
    }
  
    handleChangeEmail = (event) => {
      const { value } = event.target;
      this.setState({ email: value }, this.validateSubmit);
    };
  
    handleChangePassword = (event) => {
      const { value } = event.target;
      this.setState({ password: value }, this.validateSubmit);
    };
  
    validateSubmit = () => {
      const { email, password } = this.state;
      this.setState({ enableSubmit: email !== '' && password !== '' });
    };
  
    handleLoginSubmit = (event) => {
      event.preventDefault();
      const { enableSubmit } = this.state;
      const { logIn } = this.props;
      if (enableSubmit) {
        const { email, password } = this.state;
        logIn(email, password);
        console.log('Login submitted');
      }
    };
  
    render() {
      const { email, password, enableSubmit } = this.state;
  
      return (
        <React.Fragment>
          <div className={css(styles.AppBody)}>
            <form onSubmit={this.handleLoginSubmit}>
              <div>
                <p>Login to access the full dashboard</p>
              </div>
              <div className={css(styles.info)}>
                <label className={css(styles.label)}>
                  Email:
                  <input
                    className={css(styles.input)}
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                  />
                </label>
                <label className={css(styles.label)}>
                  Password:
                  <input
                    className={css(styles.input)}
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChangePassword}
                  />
                </label>
                <input
                  className={css(styles.button)}
                  type="submit"
                  value="OK"
                  disabled={!enableSubmit}
                />
              </div>
            </form>
          </div>
        </React.Fragment>
      );
    }
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

Login.propTypes = {
    logIn: PropTypes.func,
};

export default Login;
