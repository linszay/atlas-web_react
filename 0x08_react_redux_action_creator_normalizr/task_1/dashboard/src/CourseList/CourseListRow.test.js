// testinggggg courselistrow
import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one cell with colspan=2 when textSecondCell does not exist', () => {
    const { getByText } = render(<CourseListRow isHeader textFirstCell="Header Text" />);
    const headerCell = getByText('Header Text');

    expect(headerCell.colSpan).toBe(2);
  });

  test('renders two cells when textSecondCell is present', () => {
    const { getByText } = render(
      <CourseListRow isHeader textFirstCell="Header Text" textSecondCell="Second Header Text" />
    );
    const firstHeaderCell = getByText('Header Text');
    const secondHeaderCell = getByText('Second Header Text');

    expect(firstHeaderCell).toBeInTheDocument();
    expect(secondHeaderCell).toBeInTheDocument();
  });

  test('renders two td in a tr when isHeader is false', () => {
    const { getByText } = render(
      <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
    );
    const cell1 = getByText('Cell 1');
    const cell2 = getByText('Cell 2');

    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
  });
});
