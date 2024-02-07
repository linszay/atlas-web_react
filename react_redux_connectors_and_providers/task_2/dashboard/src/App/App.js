import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';
import BodySection from '../BodySection/BodySection.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { AppProvider } from './AppContext.js';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
  }

  onKeyPress = (event) => {
    const { logOut } = this.props;

    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  logIn = (email, password) => {
    const { logIn } = this.context;
    logIn(email, password);
  };

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id),
    }));
  };

  render() {
    const { user } = this.context || {};
    const { listCourses, listNotifications } = this.state;
    const { isLoggedIn } = this.props;
    return (
      <AppProvider>
        <React.Fragment>
          <Notifications
            handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer}
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(styles.App)}>
            <Header />
            {user && user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.login} />
              </BodySectionWithMarginBottom>
            )}
            <div className={css(styles.BodySection)}>
              <BodySection title="News from the School">
                <p>Some random text for the school news. :)</p>
              </BodySection>
            </div>
            <div className={css(styles.Footer)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppProvider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state?.uiReducer?.isUserLoggedIn,
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    color: '#738ca5',
  },
  BodySection: {
    padding: '20px 40px',
  },
  Footer: {
    borderTop: '#102650 4px solid',
    backgroundColor: '#fbfbe4',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    color: '#102650',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
