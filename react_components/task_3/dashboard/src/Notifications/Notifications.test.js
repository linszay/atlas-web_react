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
});
