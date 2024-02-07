// anotha new component
import React from 'react';
import CourseListRow from './CourseListRow.js';
import CourseShape from './CourseShape.js';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.CourseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  CourseList: {
    paddingLeft: '30px',
    paddingTop: '40px',
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
  },


});
  

CourseListRow.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape),
};

CourseListRow.defaultProps = {
  listCourses: [],
};

export default CourseList;
