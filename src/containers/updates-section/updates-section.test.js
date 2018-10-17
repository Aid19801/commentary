import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { mount } from 'enzyme';

import { Title, UpdatesContainer } from '../../components/index';
import UpdatesSection from './updates-section';;


Enzyme.configure({ adapter: new Adapter() });

describe('key moments', () => {

    it('should render an UpdatesSection without exploding...', () => {
        const wrapper = mount(<Provider store={store}>
            <UpdatesSection />
        </Provider>);
        const expectedHtml = "<div class=\"updates-section\"><div class=\"title\"><h4 class=\"title-text\">Live Commentary</h4></div><div class=\"updates-container\"></div></div>"
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.updates-section')).toHaveLength(1);
    })

    it('should render the two child components', () => {
        const wrapper = mount(
            <Provider store={store}>
                <UpdatesSection />
            </Provider>);
        expect(wrapper.find(Title)).toHaveLength(1);
        expect(wrapper.find(UpdatesContainer)).toHaveLength(1);
    });
})
