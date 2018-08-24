import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootStore = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default rootStore;