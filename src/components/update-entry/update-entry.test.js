import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import UpdatesEntry from './update-entry';

Enzyme.configure({ adapter: new Adapter() });

describe('update entry', () => {
    it('should render a title', () => {
        const wrapper = shallow(<UpdatesEntry />);
        const expectedHtml = "<div class=\"updates-list-item\"><div class=\"updates-list-circle-container\"><h4 class=\"updates-list-item-number\"></h4><img alt=\"circle\" class=\"update-circle\" src=\"circle.png\"/></div><p class=\"updates-list-update\"></p></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.updates-list-item')).toHaveLength(1);
    });
    it('should render the expected playerNumber', () => {
        const wrapper = shallow(<UpdatesEntry playerNumber="999999" />);
        expect(wrapper.children().find('.updates-list-item-number')).toHaveLength(1);
        expect(wrapper.children().find('.updates-list-item-number').text()).toEqual('999999');
    });
    it('should render the expected playerNumber', () => {
        const wrapper = shallow(<UpdatesEntry update="mock-update" />);
        expect(wrapper.children().find('.updates-list-item-number')).toHaveLength(1);
        expect(wrapper.children().find('.updates-list-update').text()).toEqual('mock-update');
    });
})
