// footer.js new component
import React from 'react';
import './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer className="App-footer">
        <div>
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    </footer>
  );
}

export default Footer;
