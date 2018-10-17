import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { mount } from 'enzyme';

import KeyMoments from './key-moments';

import { Title } from '../../components/index';

Enzyme.configure({ adapter: new Adapter() });

describe('key moments', () => {

    it('should render a Key Moments without exploding...', () => {
        const wrapper = mount(<Provider store={store}>
            <KeyMoments />
        </Provider>);
        const expectedHtml = "<div class=\"key-moments-container\"><div class=\"title\"><h4 class=\"title-text\">Key Moments</h4></div><div class=\"key-moments-section\"></div></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.key-moments-container')).toHaveLength(1);
    })

    it('should render whats expected (html and div names)', () => {
        const wrapper = mount(
            <Provider store={store}>
                <KeyMoments />
            </Provider>);
        expect(wrapper.find(Title)).toHaveLength(1);
        expect(wrapper.find('.key-moments-section')).toHaveLength(1);

        const expectedHtml = "<div class=\"key-moments-container\"><div class=\"title\"><h4 class=\"title-text\">Key Moments</h4></div><div class=\"key-moments-section\"></div></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
    });
})
