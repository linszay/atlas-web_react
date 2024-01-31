// Header.js my first component
import React, { Component } from 'react';
import AppContext from '../App/AppContext';
import atlas_logo from '../assets/holberton-logo.png';
import { StyleSheet, css } from 'aphrodite';

class Header  extends Component {
  static contextType = AppContext;

  render () {
    const { user, logOut } = this.context;
    return (
    <header className={css(styles.Header)}>
        <img src={atlas_logo} className={css(styles.AppLogo)} alt="Holberton Logo" />
        <h1 className={css(styles.AppHeader)}>School Dashboard</h1>
        {user.isLoggedIn && (
          <div className={css(styles.logoutSection)} onClick={logOut} id="logoutSection">
            Welcome {user.email} (logout)
          </div>
        )}
    </header>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#fbfbe4',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    paddingLeft: '20px',
    paddingBottom: '20px',
    borderBottom: '4px solid #102650',
    fontSize: 'calc(9px + 1vmin)',
    color: '#102650',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    position: 'relative',
  },
  
  AppHeader: {
    padding: '20px',
  },

  AppLogo: {
    height: '15vmin',
    pointerEvents: 'none',
  },
  logoutSection: {
    position: 'absolute',
    right: '20px',
    cursor: 'pointer',
    top: '0',

  },
})

export default Header;
