import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import { watcherSaga } from './saga/saga';
import { applyMiddleware, createStore } from 'redux'

const sagaMiddleware=createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(sagaMiddleware) ))
sagaMiddleware.run(watcherSaga)
export default store;