// testing notifications
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders NotificationItems', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('renders correct html for first NotificationItem element', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
  it('calls markAsRead with the right message', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    wrapper.find(NotificationItem).props().markAsRead(1);

    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });

  it('should not rerender with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications });

    expect(shouldUpdate).toBe(false);
  });

  it('should rerender with a longer list', () => {
    const initialList = [{ id: 1, type: 'default', value: 'New course available' }];
    const updatedList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const wrapper = shallow(<Notifications listNotifications={initialList} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: updatedList });

    expect(shouldUpdate).toBe(true);
  });
});
