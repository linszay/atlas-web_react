// create notification element
import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

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
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}

export default Notification;
