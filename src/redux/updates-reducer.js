import { combineReducers } from 'redux';
import { GET_UPDATES, GOT_UPDATES, GET_UPDATES_FAIL, SELECT_MOMENT } from './actions';


const initialState = {
    hasUpdates: false,
    data: [],
    fetchingUpdates: false,
    isError: null,
    selectedMoment: null,
};

export const updatesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_UPDATES:
            return {
                ...state,
                hasUpdates: false,
                fetchingUpdates: true,
            }
            break;
        case GOT_UPDATES:
            return {
                ...state,
                hasUpdates: true,
                data: action.data,
                fetchingUpdates: false,
            }
            break;

        case GET_UPDATES_FAIL:
            return {
                ...state,
                isError: action.error,
                fetchingUpdates: false,
                hasUpdates: false,
            }
            break;

        case SELECT_MOMENT:
            console.log('SELECT_MOMENT: action id', typeof action.id);
            return {
                ...state,
                selectedMoment: action.id,
            }
            break;

        default:
        return state;
    }
}

const rootReducer = combineReducers({
    updatesReducer,
})

export default rootReducer;