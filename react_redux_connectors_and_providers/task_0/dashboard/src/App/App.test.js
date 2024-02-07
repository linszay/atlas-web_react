// testing App.js
import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });
  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });
  it('renders Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });
  it('renders Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
  it('does not display CourseList component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });
});

  describe('when isLoggedIn is true', () => {
    test('renders the CourseList component', () => {
      const { getByText } = render(<App isLoggedIn={true} />);
      const loginComponent = getByText('Login');
      const courseListComponent = getByText('Available courses');

      expect(loginComponent).not.toBeInTheDocument();
      expect(courseListComponent).toBeInTheDocument();
    });

  describe('keydown event handling', () => {
    test('calls logOut and displays alert on keydown', () => {
      const logOutMock = jest.fn();
      const { container } = render(<App logOut={logOutMock} />);

      fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

      expect(logOutMock).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });
  });
});
