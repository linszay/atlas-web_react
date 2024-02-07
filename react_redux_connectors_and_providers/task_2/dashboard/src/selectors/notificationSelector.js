export const filterTypeSelected = state => state.filterType;

export const getNotifications = state => state.notifications;

export const getUnreadNotifications = state => {
    return state.notifications.filter(notification => !notification.read);
};
