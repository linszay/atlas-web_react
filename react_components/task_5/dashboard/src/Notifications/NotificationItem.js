// notification item component
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => (
  <li data-notification-type={type} onClick={() => markAsRead(id)}>
    {value}
    {html && <div dangerouslySetInnerHTML={html} />}
  </li>
));


NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

NotificationItem.defaultProps = {
    value: '',
    html: null,
};

export default NotificationItem;
