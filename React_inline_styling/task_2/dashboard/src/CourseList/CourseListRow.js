// new component CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell, id }) => {
  const rowStyling = {
    backgroundColor: isHeader ? '#AAD7D9' : '#f5f5f5ab',
  }
  if (isHeader) {
    return (
      <tr style={rowStyling}>
        {textSecondCell === null ? (
          <th colSpan="2" id={id} className={css(styles.centerHeader)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr style={rowStyling}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
};

const styles = StyleSheet.create({
  centerHeader: {
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
  },
  
  th: {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ccc',
  },

  td: {
    padding: '8px',
    textAlign: 'left',
  },
})

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
