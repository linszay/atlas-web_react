import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';

console.log = jest.fn();

describe('WithLogging HOC', () => {
  it('should log mount and unmount messages with Component for pure HTML', () => {
    const WrappedComponent = () => <div>Hello World!</div>;
    const ComponentWithLogging = WithLogging(WrappedComponent);

    const wrapper = mount(<ComponentWithLogging />);
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component is mounted');
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
    console.log.mockReset();
  });

  it('should log mount and unmount messages with the component name for Login component', () => {
    const Login = () => <div>Login Component</div>;
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
    console.log.mockReset();
  });
});
