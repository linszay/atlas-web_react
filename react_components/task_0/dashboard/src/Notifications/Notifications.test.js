// testing notifications
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("renders text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "Here is the list of notifications");
  });
});
