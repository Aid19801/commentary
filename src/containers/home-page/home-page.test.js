import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { mount, shallow } from 'enzyme';

import HomePage from './home-page';
import { UpdatesSection, KeyMoments } from '../index';

import { Title } from '../../components/index';

Enzyme.configure({ adapter: new Adapter() });

describe('homepage', () => {
    it('should render a homepage without exploding...', () => {
        const wrapper = mount(<Provider store={store}>
            <HomePage />
        </Provider>);
        const expectedHtml = "<div class=\"homepage\"><div class=\"updates-section\"><div class=\"title\"><h4 class=\"title-text\">Live Commentary</h4></div><div class=\"updates-container\"></div></div><div class=\"key-moments-container\"><div class=\"title\"><h4 class=\"title-text\">Key Moments</h4></div><div class=\"key-moments-section\"></div></div></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.homepage')).toHaveLength(1);
    })
    it('should render the two expected sub-sections (Updates & KeyMoments)', () => {
        const wrapper = mount(
        <Provider store={store}>
            <HomePage />
        </Provider>);
        expect(wrapper.find(UpdatesSection)).toHaveLength(1)
        expect(wrapper.find(KeyMoments)).toHaveLength(1)
        expect(wrapper.find(Title)).toHaveLength(2)

        const expectedHtml = "<div class=\"homepage\"><div class=\"updates-section\"><div class=\"title\"><h4 class=\"title-text\">Live Commentary</h4></div><div class=\"updates-container\"></div></div><div class=\"key-moments-container\"><div class=\"title\"><h4 class=\"title-text\">Key Moments</h4></div><div class=\"key-moments-section\"></div></div></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
    })
})
