import uiReducer from './uiReducer';
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = {};
        const newState = uiReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: 'SELECT_COURSE' };
        const newState = uiReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    it('should correctly change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const newState = uiReducer(initialState, action);
        expect(newState.get('isNotificationDrawerVisible')).toBe(true);
    });

    it('should correctly change the isNotificationDrawerVisible property when the action HIDE_NOTIFICATION_DRAWER is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const newState = uiReducer(initialState, action);
        expect(newState.get('isNotificationDrawerVisible')).toBe(false);
    });

    it('should correctly change the isUserLoggedIn property when the action LOGIN_SUCCESS is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        const action = { type: LOGIN_SUCCESS };
        const newState = uiReducer(initialState, action);
        expect(newState.get('isUserLoggedIn')).toBe(true);
    });

    it('should correctly change the isUserLoggedIn property when the action LOGIN_FAILURE is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map({})
        });
        const action = { type: LOGIN_FAILURE };
        const newState = uiReducer(initialState, action);
        expect(newState.get('isUserLoggedIn')).toBe(false);
    });

    it('should return the initial state when the action LOGOUT is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map({})
        });
        const action = { type: LOGOUT };
        const newState = uiReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});
