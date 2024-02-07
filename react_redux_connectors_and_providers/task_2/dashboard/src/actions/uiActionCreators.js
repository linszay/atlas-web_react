// bind action creators
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActionTypes from './uiActionTypes';

const login = (email, password) => ({
  type: uiActionTypes.LOGIN,
  user: { email, password },
});

const loginSuccess = () => ({
  type: uiActionTypes.LOGIN_SUCCESS,
});

const loginFailure = () => ({
  type: uiActionTypes.LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

const logout = () => ({
  type: uiActionTypes.LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: uiActionTypes.HIDE_NOTIFICATION_DRAWER,
});

const useUIActionCreators = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    { login, logout, displayNotificationDrawer, hideNotificationDrawer },
    dispatch
  );
};

export default useUIActionCreators;
