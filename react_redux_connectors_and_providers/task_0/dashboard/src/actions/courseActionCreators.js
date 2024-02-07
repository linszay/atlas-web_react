// bind action creators
import { bindActionCreators } from 'redux';
import * as courseActionTypes from './courseActionTypes';

const selectCourse = (index) => ({
  type: courseActionTypes.SELECT_COURSE,
  index,
});

const unSelectCourse = (index) => ({
  type: courseActionTypes.UNSELECT_COURSE,
  index,
});

const courseActionCreators = bindActionCreators(
  { selectCourse, unSelectCourse },
  useDispatch()
);

export default courseActionCreators;
