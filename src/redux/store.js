import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import reducers from './updates-reducer';

import { watcherGetUpdates } from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        watcherGetUpdates(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;