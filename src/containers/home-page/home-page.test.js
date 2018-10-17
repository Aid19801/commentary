import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, shallow } from 'enzyme';

import HomePage from './home-page';
import { Title } from '../../components/index';

Enzyme.configure({ adapter: new Adapter() });

describe('homepage', () => {
    it('should render a homepage', () => {
        const wrapper = shallow(<HomePage />);
        const expectedHtml = "<div class=\"homepage\"><div class=\"title\"><h4 class=\"title-text\">Live Commentary</h4></div><h4 class=\"homeo-title\">homeo page</h4></div>";
        expect(wrapper.html()).toEqual(expectedHtml)
        expect(wrapper.find('.homepage')).toHaveLength(1);
    })
    it('should render the expected Child Element (<Title />)', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(Title)).toHaveLength(1);
    });
})
