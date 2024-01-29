import React, { Component } from 'react';
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
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentMounted() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  onKeyPress = (event) => {
    const { logOut } = this.props;

    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

    render() {
      const { isLoggedIn, displayDrawer } = this.props;
      const { listCourses, listNotifications } = this.state;
      return (
      <React.Fragment>
        <Notifications displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} listNotifications={listNotifications} />
        <div className={css(styles.App)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
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
    );
  }
}

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    color: '#738ca5'
  },
  BodySection: {
    padding: '20px 40px'
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
    color: '#102650'
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  listCourses: [],
  listNotifications: [],
  logOut: () => {},
};

export default App;
