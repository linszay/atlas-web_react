import { selectCourse, unSelectCourse } from './courseActionTypes';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionCreators';

describe('courseActionCreators', () => {
    describe('selectCourse', () => {
        it('should return an action object with type SELECT_COURSE and index', () => {
            const index = 1;
            const expectedAction = { type: SELECT_COURSE, index };
            const action = selectCourse(index);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('unSelectCourse', () => {
        it('should return an action object with type UNSELECT_COURSE and index', () => {
            const index = 1;
            const expectedAction = { type: UNSELECT_COURSE, index };
            const action = unSelectCourse(index);
            expect(action).toEqual(expectedAction);
        });
    });
});
