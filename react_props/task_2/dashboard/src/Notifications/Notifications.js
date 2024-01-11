// create notification element
import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeIcon from '../close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notification = () => {
  return (
   <div className="Notifications">
    <button
            style={{ float: 'right', background: 'transparent', border: 'none', cursor: 'pointer' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
            >
                <img src={closeIcon} alt="Close" />
            </button>
    <p>Here is the list of notifications</p>
    <ul>
      <NotificationItem type="default" value="New course available" />
      <NotificationItem type="urgent" value="New resume available" />
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
    </ul>
  </div>
  )
}

export default Notification;
