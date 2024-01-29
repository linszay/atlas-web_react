// Notifications.js
import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length !== this.props.listNotifications.length;
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  
  render() {
    const { displayDrawer, listNotifications } = this.props;
    console.log('listNotifications', listNotifications);
    
    return (
    <div>
      <div className={css(styles.menuItem)}>Your notifications</div>
      <div className={css(styles.notifPanel, displayDrawer ? styles.Notifications : styles.hide)}>
        {displayDrawer && (
          <button
          style={{ float: 'right', background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}>
            <img className={css(styles.img)} src={closeIcon} alt="Close" />
          </button>
        )}
        {displayDrawer ? (
          <ul>
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              markAsRead={this.markAsRead}
              {...notification}
            />
            ))}
          </ul>
        ) : null}
        {displayDrawer && listNotifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : null}
        </div>
      </div>
    );
  }
}

// Keyframes for animations
const fadeIn = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-5px)' },
  '60%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    color: '#6d7ec3',
    padding: '10px',
    backgroundColor: '#fbfbe4',
    cursor: 'pointer',
    float: 'right',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
},

notifPanel: {
  '@media (max-width: 900px)': {
      width: '100%',
      border: 'none',
      // marginLeft: '20px',
      padding: '0',
      top: '1',
      zIndex: '1',
      position: 'relative',
      backgroundColor: '#fbfbe4',
  },
},

  Notifications: {
      border: '2px dashed #738ca5',
      padding: '5px',
      color: '#6d7ec3',
      fontFamily: 'Galano Grotesque Alt, sans-serif',
      position: 'absolute',
      right: '0',
      marginRight: '20px',
      backgroundColor: '#fbfbe4',
  },

  img: {
            width: '10px',
            height: '10px',
  },

  hide: {
      display: 'none',
  }

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
