// Header.js my first component
import React from 'react';
import atlas_logo from '../assets/holberton-logo.png';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.Header)}>
        <img src={atlas_logo} className={css(styles.AppLogo)} alt="Holberton Logo" />
        <h1 className={css(styles.AppHeader)}>School Dashboard</h1>
    </header>
  );
};

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
  }
})

export default Header;
