// notification item component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class NotificationItem extends Component {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
    return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
        {value}
        {html && <div dangerouslySetInnerHTML={html} />}
        </li>
    );
  }
}


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
