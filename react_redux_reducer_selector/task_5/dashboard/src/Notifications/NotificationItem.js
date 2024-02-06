import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => (
  <li className={css(type === 'urgent' ? styles.urgent : styles.default, styles.NotificationItem)} data-notification-type={type} onClick={() => markAsRead(id)}>
    {value}
    {html && <div dangerouslySetInnerHTML={html} />}
  </li>
));

const styles = StyleSheet.create({
  urgent: {
    color: '#8294C4',
  },
  default: {
    color: '#ACB1D6',
  },

  NotificationItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
      borderBottom: '2px solid black',
      padding: '10px 8px',  
      backgroundColor: '#fbfbe4',
    },    
  },
});

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
