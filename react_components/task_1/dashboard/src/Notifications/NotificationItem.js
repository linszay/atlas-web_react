// notification item component
import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    return (
    <li data-notification-type={type}>
        {value}
        {html && <div dangerouslySetInnerHTML={html} />}
        </li>
    )
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
};

// NotificationItem.defaultProps = {
//     type: 'default',
//     html: { __html: '<u>test</u>' },
//     value: 'test',
// };

export default NotificationItem;
