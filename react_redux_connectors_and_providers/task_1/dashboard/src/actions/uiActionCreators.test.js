import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

describe('UI Action Creators', () => {
    it('should create a login action', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            user: {
                email,
                password,
            },
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('should create a logout action', () => {
        const expectedAction = {
            type: LOGOUT,
        };
        expect(logout()).toEqual(expectedAction);
    });

    it('should create a displayNotificationDrawer action', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('should create a hideNotificationDrawer action', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });

    describe('loginRequest', () => {
        it('should dispatch LOGIN and LOGIN_SUCCESS actions on successful API response', () => {
            const apiResponse = { success: true };
            const apiRequest = jest.fn().mockResolvedValue(apiResponse);
            const dispatch = jest.fn();

            loginRequest('test@example.com', 'password123')(dispatch, null, { apiRequest });
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN });
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_SUCCESS });
        });

        it('should dispatch LOGIN and LOGIN_FAILURE actions on API query failure', () => {
            const apiResponse = { success: false };
            const apiRequest = jest.fn().mockRejectedValue(apiResponse);
            const dispatch = jest.fn();

            loginRequest('test@example.com', 'password123')(dispatch, null, { apiRequest });
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN });
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_FAILURE });
        });
    });
});

