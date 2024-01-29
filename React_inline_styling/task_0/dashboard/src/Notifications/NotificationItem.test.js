// notif item testsssss
import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('NotificationItem', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    });
    
    it('renders with correct type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find(".default")).toHaveLength(1);
        expect(wrapper.text()).toEqual("test");
    });
    
    it('renders with correct html prop', () => {
        const wrapper = shallow(
        <NotificationItem html={{ __html: "<u>test</u>" }} />
        );
        expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
    });
    it('calls markAsRead with the right ID arg on click', () => {
        const markAsReadSpy = jest.fn();
        const wrapper = shallow(<NotificationItem markAsRead={markAsReadSpy} id={1} />);
    
        wrapper.find('li').simulate('click');
    
        expect(markAsReadSpy).toHaveBeenCalledWith(1);
      });
    });
