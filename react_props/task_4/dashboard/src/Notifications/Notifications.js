// Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';

const Notifications = ({ displayDrawer }) => {
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
        {displayDrawer && (
        <>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
        </>
      )}
      </div>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
