import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import UpdatesEntry from './update-entry';

Enzyme.configure({ adapter: new Adapter() });

describe('update entry', () => {
    it('should render a title', () => {
        const wrapper = mount(<Provider store={store}>
            <UpdatesEntry />
        </Provider>);
        const expectedHtml = "<div class=\"updates-list-item\"><div class=\"updates-list-circle-container\"><h4 class=\"updates-list-item-number\"></h4><img alt=\"circle\" class=\"update-circle\" src=\"circle.png\"></div><p class=\"updates-list-update\"></p></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.updates-list-item')).toHaveLength(1);
    });
    it('should render the expected time', () => {
        const wrapper = mount(<Provider store={store}>
            <UpdatesEntry time="999999" />
        </Provider>);

        expect(wrapper.children().find('.updates-list-item-number')).toHaveLength(1);
        expect(wrapper.children().find('.updates-list-item-number').text()).toEqual('999999');
    });
    it('should render the expected time', () => {
        const wrapper = mount(<Provider store={store}>
            <UpdatesEntry update="mock-update" />
        </Provider>);

        expect(wrapper.children().find('.updates-list-item-number')).toHaveLength(1);
        expect(wrapper.children().find('.updates-list-update').text()).toEqual('mock-update');
    });
})
