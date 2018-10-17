import { put, takeLatest } from 'redux-saga/effects';
import { GET_UPDATES, GOT_UPDATES, GET_UPDATES_FAIL } from './actions';

export function* watcherGetUpdates() {
    yield takeLatest(GET_UPDATES, workerGetUpdates);
}

export function* workerGetUpdates() {
    let data = [];
    let error = null;

    yield fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(json => {
            console.log('data back: ', json);
            data = json;
        })
        .catch(err => {
            console.log('saga | error: ', err)
            error = err;
        })

    data.length > 0 ? yield put({ type: GOT_UPDATES, data }) : yield put({ type: GET_UPDATES_FAIL, error });
    
}
