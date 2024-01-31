import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('renders BodySection comp w props passed correctly', () => {
    const props = { title: 'test title', children: <p>test children node</p> };

    const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);
    const bodySection = wrapper.find(BodySection);

    expect(bodySection).toHaveLength(1);
    expect(bodySection.prop('title')).toEqual('test title');

    const pElement = bodySection.find('p');
    expect(pElement).toHaveLength(1);
    expect(pElement.text()).toEqual('test children node');
  });

  it('applies the correct CSS style', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    const divElement = wrapper.find('div');

    expect(divElement.prop('style')).toHaveProperty('marginBottom', '40px');
  });
});
