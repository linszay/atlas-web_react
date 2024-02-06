// footer.js new component
import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <footer className="App-footer">
        <div>
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            <p>{
              user.isLoggedIn && (
                <a href='#'>Contact us</a>
              )}
            </p>
        </div>
    </footer>
  );
}

export default Footer;
