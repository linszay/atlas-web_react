// bind action creators
import { bindActionCreators } from 'redux';
import * as uiActionTypes from './uiActionTypes';

const login = (email, password) => ({
  type: uiActionTypes.LOGIN,
  user: { email, password },
});

const logout = () => ({
  type: uiActionTypes.LOGOUT,
});

const displayNotificationDrawer = () => ({
  type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
});

const hideNotificationDrawer = () => ({
  type: uiActionTypes.HIDE_NOTIFICATION_DRAWER,
});

const uiActionCreators = bindActionCreators(
  { login, logout, displayNotificationDrawer, hideNotificationDrawer },
  useDispatch()
);

export default uiActionCreators;
