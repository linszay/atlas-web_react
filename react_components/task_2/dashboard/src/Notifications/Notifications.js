// Notifications.js
import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  
  render() {
    const { displayDrawer, listNotifications } = this.props;
    
    return (
    <div>
      <div className="menuItem">Your notifications</div>
      <div className={`Notifications ${displayDrawer ? 'show' : ''}`}>
        {displayDrawer && (
          <button
          style={{ float: 'right', background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} alt="Close" />
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
        {displayDrawer && listNotifications.length === 0 && (
          <p>No new notification for now</p>
        )}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
