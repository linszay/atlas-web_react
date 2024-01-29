// new component CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell, id }) => {
  const rowStyling = {
    backgroundColor: isHeader ? '#AAD7D9' : '#f5f5f5ab',
  }
  if (isHeader) {
    return (
      <tr style={rowStyling}>
        {textSecondCell === null ? (
          <th colSpan="2" id={id}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr style={rowStyling}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  id: null,
};

export default CourseListRow;
