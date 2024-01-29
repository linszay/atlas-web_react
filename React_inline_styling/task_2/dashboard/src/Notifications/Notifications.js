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
      <div className={css(styles.Notifications, displayDrawer ? '' : styles.hide)}>
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

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    color: '#6d7ec3',
    padding: '10px',
    backgroundColor: '#fffae6',
},

  Notifications: {
      border: '2px dashed #738ca5',
      padding: '5px',
      color: '#6d7ec3',
      fontFamily: 'Galano Grotesque Alt, sans-serif',
      position: 'absolute',
      right: '0',
      marginRight: '20px',
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
