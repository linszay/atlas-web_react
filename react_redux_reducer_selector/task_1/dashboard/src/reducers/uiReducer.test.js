import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const action = {};
        const newState = uiReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const action = { type: 'SELECT_COURSE' };
        const newState = uiReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    it('should correctly change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const newState = uiReducer(initialState, action);
        expect(newState.isNotificationDrawerVisible).toBe(true);
    });
});
