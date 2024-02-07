// footer tests
import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });
    
    it('verifies that Footer at least renders text Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain('Copyright');
    });
});
