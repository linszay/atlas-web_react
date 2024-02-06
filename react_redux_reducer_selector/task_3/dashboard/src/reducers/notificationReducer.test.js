import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActions';

describe('notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual({
            filter: 'DEFAULT',
            notifications: []
        });
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            payload: [
                { id: 1, message: 'Notification 1' },
                { id: 2, message: 'Notification 2' }
            ]
        };

        const newState = notificationReducer(undefined, action);

        expect(newState).toEqual({
            filter: 'DEFAULT',
            notifications: [
                { id: 1, message: 'Notification 1' },
                { id: 2, message: 'Notification 2' }
            ]
        });
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [
                { id: 1, message: 'Notification 1', read: false },
                { id: 2, message: 'Notification 2', read: false }
            ]
        };

        const action = {
            type: MARK_AS_READ,
            payload: 1
        };

        const newState = notificationReducer(initialState, action);

        expect(newState).toEqual({
            filter: 'DEFAULT',
            notifications: [
                { id: 1, message: 'Notification 1', read: true },
                { id: 2, message: 'Notification 2', read: false }
            ]
        });
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = {
            filter: 'DEFAULT',
            notifications: []
        };

        const action = {
            type: SET_TYPE_FILTER,
            payload: 'HIGH_PRIORITY'
        };

        const newState = notificationReducer(initialState, action);

        expect(newState).toEqual({
            filter: 'HIGH_PRIORITY',
            notifications: []
        });
    });
});
