import React from 'react';
import atlas_logo from './atlas_logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={atlas_logo} className="App-logo" alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </header>
      <body className="App-body">
        <div>
          <p>Login to access the full dashboard</p>
        </div>
      </body>
      <footer className="App-footer">
        <div>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
