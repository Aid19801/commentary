import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';


import { updatesReducer } from './updates-reducer';

// import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });


describe('Redux / Stateless Functions...', () => {


    it('should always generate the same expected output (GET_UPDATES)', () => {

        const mockState = {
            fetchingUpdates: false,
        };

        const expectedOutput = true
        const reducerOutput = updatesReducer(mockState, { type: 'GET_UPDATES' });

        expect(reducerOutput.fetchingUpdates).toEqual(expectedOutput)
    })

    it('should always generate the same expected output (GOT_UPDATES)', () => {

        const mockState = {
            hasUpdates: false,
            data: [],
            fetchingUpdates: true,
        };

        const expectedData = ['data-being-passed']
        const reducerOutput = updatesReducer(mockState, { type: 'GOT_UPDATES', data: ['data-being-passed'] });
        expect(reducerOutput.data).toEqual(expectedData);
        expect(reducerOutput.fetchingUpdates).toEqual(false);
        expect(reducerOutput.hasUpdates).toEqual(true);
    })

    it('should always generate the same expected output (GET_UPDATES_FAIL)', () => {

        const mockState = {
            hasUpdates: false,
            data: [],
            fetchingUpdates: true,
            isError: false,
        };

        const expectedError = 'mock-error';
        const reducerOutput = updatesReducer(mockState, { type: 'GET_UPDATES_FAIL', error: 'mock-error' });
        expect(reducerOutput.isError).toEqual(expectedError);
    })
})