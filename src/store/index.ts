import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import root from './root';

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
