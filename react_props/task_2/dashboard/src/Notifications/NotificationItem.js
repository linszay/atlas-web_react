// notification item component
import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
        {value}
        </li>
    )
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }).isRequired,
    value: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
    type: 'default',
    html: { __html: '<u>test</u>' },
    value: 'test',
};

export default NotificationItem;
