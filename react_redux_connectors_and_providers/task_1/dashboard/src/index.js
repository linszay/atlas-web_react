import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App.js';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './App/AppContext.js';
import uiReducer from './reducers/uiReducer.js';

const store = createStore(uiReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
