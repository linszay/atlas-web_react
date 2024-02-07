import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
    describe('filterTypeSelected', () => {
        test('should return the selected filter type', () => {
            const state = { filterType: 'important' };
            const result = filterTypeSelected(state);
            expect(result).toBe('important');
        });
    });

    describe('getNotifications', () => {
        test('should return a list of message entities within the reducer', () => {
            const state = { notifications: ['message1', 'message2'] };
            const result = getNotifications(state);
            expect(result).toEqual(['message1', 'message2']);
        });
    });

    describe('getUnreadNotifications', () => {
        test('should return a list of unread message entities within the reducer', () => {
            const state = { notifications: ['message1', 'message2'], unreadCount: 2 };
            const result = getUnreadNotifications(state);
            expect(result).toEqual(['message1', 'message2']);
        });
    });
});
