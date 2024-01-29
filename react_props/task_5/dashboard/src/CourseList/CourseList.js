// anotha new component
import React from 'react';
import CourseListRow from './CourseListRow.js';
import './CourseList.css';
import CourseShape from './CourseShape.js';
import propTypes from 'prop-types';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
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

CourseListRow.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape),
};

CourseListRow.defaultProps = {
  listCourses: [],
};

export default CourseList;
