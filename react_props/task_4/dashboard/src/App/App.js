import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

function App({ isLoggedIn, displayDrawer }) {
  return (
    <React.Fragment>
      <Notifications displayDrawer={displayDrawer} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default App;
