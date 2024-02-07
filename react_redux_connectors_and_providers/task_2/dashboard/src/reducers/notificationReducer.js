import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActions';
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from '../utils/normalizers';
const initialState = Map({
    filter: 'DEFAULT',
    notifications: Map()
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedNotifications = notificationsNormalizer(action.data);
            return state.mergeIn(['notifications'], fromJS(normalizedNotifications));
        case MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};

export default notificationReducer;
