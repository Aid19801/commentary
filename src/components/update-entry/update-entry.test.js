import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Title } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('title', () => {
    it('should render a title', () => {
        const wrapper = shallow(<Title />);
        const expectedHtml = "<div class=\"title\"><h4 class=\"title-text\"></h4></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.title')).toHaveLength(1);
    });
    it('should render the expected children', () => {
        const wrapper = shallow(<Title title="mock-title" />);
        expect(wrapper.children().find('.title-text')).toHaveLength(1);
        expect(wrapper.children().find('.title-text').text()).toEqual('mock-title');
    });
})
