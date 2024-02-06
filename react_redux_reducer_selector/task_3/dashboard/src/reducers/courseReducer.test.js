import courseReducer from './courseReducer';

describe('courseReducer', () => {
    it('should return the default state', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = courseReducer(undefined, action);
        expect(newState).toEqual(initialState);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const initialState = [];
        const data = [{ id: 1, name: 'Course 1' }];
        const action = { type: 'FETCH_COURSE_SUCCESS', data };
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual(data);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [{ id: 1, name: 'Course 1', selected: false }];
        const updatedData = { id: 1, name: 'Course 1', selected: true };
        const action = { type: 'SELECT_COURSE', data: updatedData };
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual([updatedData]);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [{ id: 1, name: 'Course 1', selected: true }];
        const updatedData = { id: 1, name: 'Course 1', selected: false };
        const action = { type: 'UNSELECT_COURSE', data: updatedData };
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual([updatedData]);
    });
});
