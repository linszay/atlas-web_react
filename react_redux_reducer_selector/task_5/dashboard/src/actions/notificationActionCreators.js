// bind action creators
import { bindActionCreators } from 'redux';
import * as notificationActionTypes from './notificationActionTypes';

const markAsRead = (index) => ({
  type: notificationActionTypes.MARK_AS_READ,
  index,
});

const setNotificationFilter = (filter) => ({
  type: notificationActionTypes.SET_NOTIFICATION_FILTER,
  filter,
});

const notificationActionCreators = bindActionCreators(
  { markAsRead, setNotificationFilter },
  useDispatch()
);

export default notificationActionCreators;
