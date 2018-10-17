import { combineReducers } from 'redux';
import { GET_UPDATES, GOT_UPDATES, GET_UPDATES_FAIL } from './actions';


const initialState = {
    hasUpdates: false,
    data: [],
    fetchingUpdates: false,
    isError: false,
};

const updatesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_UPDATES:
        console.log('GET UPDATES');
            return {
                ...state,
                hasUpdates: false,
                fetchingUpdates: true,
            }
            break;
        case GOT_UPDATES:
            console.log('GOT UPDATES: ', action.data);
            return {
                ...state,
                hasUpdates: true,
                data: action.data,
                fetchingUpdates: false,
            }
            break;

        case GET_UPDATES_FAIL:
            console.log('FAIL: ', action.error);
            return {
                ...state,
                isError: action.error,
                fetchingUpdates: false,
                hasUpdates: false,
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