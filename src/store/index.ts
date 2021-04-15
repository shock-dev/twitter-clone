import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import saga from './saga.root';
import root from './reducer.root';
import { TweetsStateInterface } from './ducks/tweets/contracts/state';
import { TagsStateInterface } from './ducks/tags/contracts/state';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsStateInterface
  tags: TagsStateInterface
}

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
