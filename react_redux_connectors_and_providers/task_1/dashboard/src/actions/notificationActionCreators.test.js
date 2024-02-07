import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
    describe('markAsRead', () => {
        it('should return the correct action object', () => {
            const index = 1;
            const expectedAction = {
                type: MARK_AS_READ,
                index: index
            };
            const action = markAsRead(index);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('setNotificationFilter', () => {
        it('should return the correct action object', () => {
            const filter = NotificationTypeFilters.DEFAULT;
            const expectedAction = {
                type: SET_TYPE_FILTER,
                filter: filter
            };
            const action = setNotificationFilter(filter);
            expect(action).toEqual(expectedAction);
        });
    });
});
