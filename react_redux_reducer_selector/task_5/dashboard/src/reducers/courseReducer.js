import { Map } from 'immutable';
const initialState = Map();

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSE_SUCCESS':
            return state.merge(normalizeData(action.data));
        case 'SELECT_COURSE':
            return state.setIn([action.index, 'isSelected'], true);
        case 'UNSELECT_COURSE':
            return state.setIn([action.index, 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;
